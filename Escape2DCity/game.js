// Cấu hình game
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
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
    // Tải các hình ảnh từ thư mục assets
    this.load.image('player', 'assets/player.png');
    this.load.image('police', 'assets/police.png');
    this.load.image('item', 'assets/item.png');
}

function create() {
    // Tạo nhân vật người chơi
    player = this.physics.add.image(400, 300, 'player');
    player.setCollideWorldBounds(true);
    player.setDrag(100);

    // Tạo nhóm xe cảnh sát
    policeCars = this.physics.add.group();
    for (let i = 0; i < 3; i++) {
        const car = policeCars.create(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'police');
        car.setCollideWorldBounds(true);
        car.setBounce(1);
    }

    // Tạo nhóm vật phẩm
    items = this.physics.add.group();
    for (let i = 0; i < 5; i++) {
        const item = items.create(Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), 'item');
        item.setCollideWorldBounds(true);
    }

    // Thiết lập đầu vào bàn phím
    cursors = this.input.keyboard.createCursorKeys();

    // Thiết lập va chạm và sự kiện
    this.physics.add.collider(player, policeCars, hitPolice, null, this);
    this.physics.add.overlap(player, items, collectItem, null, this);

    // Hiển thị điểm số
    scoreText = this.add.text(16, 16, 'Điểm: 0', { fontSize: '24px', fill: '#ecf0f1' });
}

function update() {
    if (isGameOver) {
        return;
    }

    // Di chuyển nhân vật
    player.setVelocity(0);
    if (cursors.left.isDown) {
        player.setVelocityX(-250);
    } else if (cursors.right.isDown) {
        player.setVelocityX(250);
    }
    if (cursors.up.isDown) {
        player.setVelocityY(-250);
    } else if (cursors.down.isDown) {
        player.setVelocityY(250);
    }

    // Cập nhật AI của xe cảnh sát để đuổi theo người chơi
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

    // Nếu thu thập hết vật phẩm, tạo lại ở vị trí mới
    if (items.countActive(true) === 0) {
        items.children.entries.forEach(item => {
            item.enableBody(false, Phaser.Math.Between(50, 750), Phaser.Math.Between(50, 550), true, true);
        });
    }
}

function hitPolice(player, car) {
    this.physics.pause();
    player.setTint(0xff0000);
    isGameOver = true;
    const gameOverText = this.add.text(400, 300, 'GAME OVER', { fontSize: '64px', fill: '#e74c3c' });
    gameOverText.setOrigin(0.5);
    const restartText = this.add.text(400, 400, 'Nhấn F5 để chơi lại', { fontSize: '24px', fill: '#bdc3c7' });
    restartText.setOrigin(0.5);
}
