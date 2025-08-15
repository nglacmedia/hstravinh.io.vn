// Cấu hình game
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false // Đặt là true để xem các hộp va chạm
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

const game = new Phaser.Game(config);

let player;
let policeCars;
let items;
let cursors;
let score = 0;
let scoreText;
let isGameOver = false;

function preload() {
    // Không cần tải hình ảnh vì chúng ta sẽ vẽ hình dạng đơn giản
}

function create() {
    // Tạo nhân vật người chơi (hình vuông màu xanh dương)
    const playerGraphics = this.add.graphics();
    playerGraphics.fillStyle(0x007bff, 1);
    playerGraphics.fillRect(0, 0, 30, 30);
    playerGraphics.generateTexture('player', 30, 30);
    player = this.physics.add.image(400, 300, 'player');
    player.setCollideWorldBounds(true);
    player.setDrag(100);

    // Tạo xe cảnh sát (nhóm các hình vuông màu đỏ)
    policeCars = this.physics.add.group();
    for (let i = 0; i < 3; i++) {
        const policeGraphics = this.add.graphics();
        policeGraphics.fillStyle(0xdc3545, 1);
        policeGraphics.fillRect(0, 0, 40, 20);
        policeGraphics.generateTexture('police', 40, 20);
        const car = policeCars.create(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'police');
        car.setCollideWorldBounds(true);
        car.setBounce(1);
    }

    // Tạo vật phẩm để thu thập (nhóm các hình tròn màu vàng)
    items = this.physics.add.group();
    const itemGraphics = this.add.graphics();
    itemGraphics.fillStyle(0xffc107, 1);
    itemGraphics.fillCircle(10, 10, 10);
    itemGraphics.generateTexture('item', 20, 20);
    for (let i = 0; i < 5; i++) {
        const item = items.create(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'item');
        item.setCollideWorldBounds(true);
    }

    // Thiết lập bàn phím
    cursors = this.input.keyboard.createCursorKeys();

    // Thiết lập va chạm
    this.physics.add.collider(player, policeCars, hitPolice, null, this);
    this.physics.add.overlap(player, items, collectItem, null, this);

    // Hiển thị điểm
    scoreText = this.add.text(16, 16, 'Điểm: 0', { fontSize: '32px', fill: '#fff' });
}

function update() {
    if (isGameOver) {
        return;
    }

    // Di chuyển nhân vật người chơi
    player.setVelocity(0);
    if (cursors.left.isDown) {
        player.setVelocityX(-200);
    } else if (cursors.right.isDown) {
        player.setVelocityX(200);
    }
    if (cursors.up.isDown) {
        player.setVelocityY(-200);
    } else if (cursors.down.isDown) {
        player.setVelocityY(200);
    }

    // Cập nhật vị trí của xe cảnh sát để đuổi theo người chơi
    policeCars.children.entries.forEach(car => {
        const angle = Phaser.Math.Angle.Between(car.x, car.y, player.x, player.y);
        car.setVelocityX(Math.cos(angle) * 150);
        car.setVelocityY(Math.sin(angle) * 150);
    });
}

function collectItem(player, item) {
    item.disableBody(true, true);
    score += 10;
    scoreText.setText('Điểm: ' + score);

    if (items.countActive(true) === 0) {
        // Tạo lại các vật phẩm sau khi thu thập hết
        items.children.entries.forEach(item => {
            item.enableBody(false, Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), true, true);
        });
    }
}

function hitPolice(player, car) {
    this.physics.pause();
    player.setTint(0xff0000);
    isGameOver = true;
    const gameOverText = this.add.text(400, 300, 'Game Over', { fontSize: '64px', fill: '#fff' });
    gameOverText.setOrigin(0.5);
    const restartText = this.add.text(400, 400, 'Nhấn F5 để chơi lại', { fontSize: '24px', fill: '#fff' });
    restartText.setOrigin(0.5);
}
