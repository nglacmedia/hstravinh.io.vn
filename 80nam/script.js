const quizData = [
    {
        question: "1. Chiến tranh thế giới thứ hai (1939-1945) kết thúc bằng sự kiện nào sau đây?",
        options: {
            a: "Quân Đồng minh tấn công Berlin",
            b: "Phát xít Đức đầu hàng Đồng minh",
            c: "Phát xít Nhật đầu hàng Đồng minh không điều kiện",
            d: "Mỹ thả bom nguyên tử xuống Hiroshima và Nagasaki"
        },
        correctAnswer: "c"
    },
    {
        question: "2. Trung ương Đảng Cộng sản Đông Dương đã nhận định thời cơ để nhân dân Việt Nam vùng lên giành độc lập vào năm 1945 là gì?",
        options: {
            a: "Cách mạng tháng Mười Nga thành công",
            b: "Phát xít Nhật đầu hàng Đồng minh",
            c: "Quân Pháp rút khỏi Đông Dương",
            d: "Liên Xô tuyên chiến với Nhật Bản"
        },
        correctAnswer: "b"
    },
    {
        question: "3. Ngay sau khi Nhật đảo chính Pháp (09/3/1945), Ban Thường vụ Trung ương Đảng Cộng sản Đông Dương đã có chủ trương gì?",
        options: {
            a: "Tổng khởi nghĩa trên toàn quốc",
            b: "Ra bản Chỉ thị \"Nhật - Pháp bắn nhau và hành động của chúng ta\"",
            c: "Xây dựng lực lượng vũ trang ở các thành phố lớn",
            d: "Kêu gọi quân Đồng minh giúp đỡ"
        },
        correctAnswer: "b"
    },
    {
        question: "4. Hội nghị Ban Thường vụ Trung ương Đảng ra bản Chỉ thị “Nhật - Pháp bắn nhau và hành động của chúng ta” vào ngày tháng năm nào?",
        options: {
            a: "12/3/1945",
            b: "19/5/1945",
            c: "13/8/1945",
            d: "2/9/1945"
        },
        correctAnswer: "a"
    },
    {
        question: "5. Tháng 4/1945, Hội nghị quân sự cách mạng Bắc Kỳ đã quyết định thống nhất các lực lượng vũ trang cách mạng thành tổ chức nào sau đây?",
        options: {
            a: "Cứu quốc quân",
            b: "Việt Nam Giải phóng quân",
            c: "Việt Nam Tuyên truyền Giải phóng quân",
            d: "Mặt trận Việt Minh"
        },
        correctAnswer: "b"
    },
    {
        question: "6. Ngày 16/4/1945, Tổng bộ Việt Minh đã chỉ đạo thành lập các cơ quan nào từ Trung ương đến địa phương để chuẩn bị cho khởi nghĩa giành chính quyền?",
        options: {
            a: "Ủy ban Dân tộc giải phóng",
            b: "Ủy ban Kháng chiến",
            c: "Ủy ban quân sự cách mạng",
            d: "Ủy ban Hành chính"
        },
        correctAnswer: "c"
    },
    {
        question: "7. Đầu tháng 5/1945, Chủ tịch Hồ Chí Minh đã chọn địa điểm nào ở Tuyên Quang làm căn cứ chỉ đạo cách mạng toàn quốc?",
        options: {
            a: "Đình Hồng Thái",
            b: "Pác Bó",
            c: "Cao Bằng",
            d: "Tân Trào"
        },
        correctAnswer: "d"
    },
    {
        question: "8. Tháng 5/1945, Xứ ủy Tiền phong đã cử bác sĩ Phạm Ngọc Thạch cùng một số cán bộ khác của Đảng đứng ra tổ chức phong trào “Thanh niên Tiền phong” đã lấy lá cờ nào sau đây làm biểu tượng?",
        options: {
            a: "Cờ đỏ sao vàng",
            b: "Cờ ba sọc",
            c: "Cờ đỏ búa liềm",
            d: "Cờ xanh sọc trắng"
        },
        correctAnswer: "a"
    },
    {
        question: "9. Quốc dân đại hội họp tại Tân Trào vào ngày 16/8/1945 đã thông qua Mười chính sách lớn của tổ chức nào sau đây?",
        options: {
            a: "Đảng Cộng sản Đông Dương",
            b: "Chính phủ Lâm thời",
            c: "Tổng bộ Việt Minh",
            d: "Ủy ban Dân tộc giải phóng"
        },
        correctAnswer: "c"
    },
    {
        question: "10. Ngày 16/8/1945, Đại hội Quốc dân do Tổng bộ Việt minh triệu tập đã cử ra Ủy ban Dân tộc giải phóng Việt Nam do ai làm chủ tịch?",
        options: {
            a: "Võ Nguyên Giáp",
            b: "Trường Chinh",
            c: "Hồ Chí Minh",
            d: "Trần Huy Liệu"
        },
        correctAnswer: "c"
    },
    {
        question: "11. Lời kêu gọi “Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta” là của ai?",
        options: {
            a: "Võ Nguyên Giáp",
            b: "Trường Chinh",
            c: "Hồ Chí Minh",
            d: "Tôn Đức Thắng"
        },
        correctAnswer: "c"
    },
    {
        question: "12. Chiều ngày 16/8/1945, một đơn vị Giải phóng quân do đồng chí Võ Nguyên Giáp chỉ huy đã tiến về giải phóng thị xã nào, mở màn cho chiến dịch quân sự hỗ trợ tổng khởi nghĩa?",
        options: {
            a: "Hà Nội",
            b: "Lạng Sơn",
            c: "Thái Nguyên",
            d: "Tuyên Quang"
        },
        correctAnswer: "c"
    },
    {
        question: "13. Ngày 18/8/1945, những địa phương giành được chính quyền tỉnh lỵ sớm nhất cả nước là",
        options: {
            a: "Hà Nội, Hải Phòng, Huế, Sài Gòn",
            b: "Hà Tĩnh, Quảng Nam, Bắc Giang, Hải Dương",
            c: "Cao Bằng, Lạng Sơn, Thái Nguyên, Tuyên Quang",
            d: "Bến Tre, Vĩnh Long, Trà Vinh, Cần Thơ"
        },
        correctAnswer: "b"
    },
    {
        question: "14. Điều kiện khách quan thuận lợi cho Cách mạng tháng Tám năm 1945 ở Việt Nam thành công là",
        options: {
            a: "Quân Pháp đang bị suy yếu",
            b: "Phong trào đấu tranh của nhân dân phát triển mạnh",
            c: "Nhật Bản đầu hàng Đồng minh không điều kiện",
            d: "Sự giúp đỡ của Liên Xô và Trung Quốc"
        },
        correctAnswer: "c"
    },
    {
        question: "15. Nhật hoàng Hirohito tuyên bố chính thức đầu hàng Đồng minh vô điều kiện, đồng thời ra lệnh cho toàn bộ binh lính của quân đội Nhật Bản nhanh chóng hạ vũ khí vào ngày tháng năm nào?",
        options: {
            a: "13/8/1945",
            b: "14/8/1945",
            c: "15/8/1945",
            d: "19/8/1945"
        },
        correctAnswer: "c"
    },
    {
        question: "16. Lực lượng chính trị có vai trò như thế nào đối với thành công của cuộc Tổng khởi nghĩa tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Là lực lượng hỗ trợ, phối hợp với lực lượng vũ trang",
            b: "Đóng vai trò quyết định, mở đường cho lực lượng vũ trang",
            c: "Giữ vai trò bảo vệ thành quả cách mạng",
            d: "Chỉ đóng vai trò tuyên truyền, vận động"
        },
        correctAnswer: "b"
    },
    {
        question: "17. Trong Cách mạng tháng Tám năm 1945, ngày 19/8 nhân dân Việt Nam đã giành được chính quyền ở địa phương nào sau đây?",
        options: {
            a: "Huế",
            b: "Sài Gòn",
            c: "Hà Nội",
            d: "Đà Nẵng"
        },
        correctAnswer: "c"
    },
    {
        question: "18. Trong Cách mạng tháng Tám năm 1945, ngày 23/8 nhân dân Việt Nam đã giành được chính quyền ở địa phương nào sau đây?",
        options: {
            a: "Vĩnh Long",
            b: "Hải Phòng",
            c: "Hà Nội",
            d: "Sài Gòn"
        },
        correctAnswer: "a"
    },
    {
        question: "19. Trong Cách mạng tháng Tám năm 1945, nhân dân Sài Gòn đã giành được chính quyền vào thời gian nào?",
        options: {
            a: "19/8/1945",
            b: "23/8/1945",
            c: "25/8/1945",
            d: "2/9/1945"
        },
        correctAnswer: "c"
    },
    {
        question: "20. Một trong những địa phương cuối cùng giành được chính quyền trong Cách mạng tháng Tám năm 1945 ở Việt Nam là",
        options: {
            a: "Hà Tiên",
            b: "Sài Gòn",
            c: "Huế",
            d: "Hà Nội"
        },
        correctAnswer: "a"
    },
    {
        question: "21. Sự kiện nào diễn ra vào ngày 30/8/1945 đã chính thức chấm dứt chế độ phong kiến ở Việt Nam?",
        options: {
            a: "Thành lập Chính phủ lâm thời",
            b: "Vua Bảo Đại thoái vị",
            c: "Cả nước Tổng khởi nghĩa",
            d: "Tuyên ngôn Độc lập được công bố"
        },
        correctAnswer: "b"
    },
    {
        question: "22. Trong Cách mạng tháng Tám năm 1945 ở Việt Nam, thắng lợi của cuộc khởi nghĩa ở ba đô thị lớn nào đã có tác động lan tỏa, quyết định đến thắng lợi của Tổng khởi nghĩa trên cả nước?",
        options: {
            a: "Hà Nội, Hải Phòng, Cần Thơ",
            b: "Hà Nội, Huế, Sài Gòn",
            c: "Hải Phòng, Đà Nẵng, Cần Thơ",
            d: "Huế, Sài Gòn, Đà Nẵng"
        },
        correctAnswer: "b"
    },
    {
        question: "23. Ngày 02/9/1945, tại Quảng trường Ba Đình (Hà Nội), Chủ tịch Hồ Chí Minh đã đọc văn kiện lịch sử nào sau đây?",
        options: {
            a: "Lời kêu gọi toàn quốc kháng chiến",
            b: "Tuyên ngôn Độc lập",
            c: "Lời kêu gọi Tổng khởi nghĩa",
            d: "Sắc lệnh thành lập nước Việt Nam Dân chủ Cộng hòa"
        },
        correctAnswer: "b"
    },
    {
        question: "24. Câu nói “Nước Việt Nam có quyền hưởng tự do và độc lập, và sự thật đã thành một nước tự do, độc lập” được trích từ văn kiện nào sau đây?",
        options: {
            a: "Sắc lệnh Tổng tuyển cử",
            b: "Lời kêu gọi toàn quốc kháng chiến",
            c: "Tuyên ngôn Độc lập",
            d: "Hiến pháp năm 1946"
        },
        correctAnswer: "c"
    },
    {
        question: "25. Sự ra đời của nước Việt Nam Dân chủ Cộng hòa đã mở đầu cho kỷ nguyên nào sau đây của dân tộc?",
        options: {
            a: "Kỷ nguyên xây dựng chủ nghĩa xã hội",
            b: "Kỷ nguyên độc lập, tự do",
            c: "Kỷ nguyên kháng chiến chống Pháp",
            d: "Kỷ nguyên hội nhập quốc tế"
        },
        correctAnswer: "b"
    },
    {
        question: "26. Quốc kỳ nền đỏ sao vàng năm cánh được chính thức thông qua tại sự kiện nào?",
        options: {
            a: "Hội nghị toàn quốc của Đảng",
            b: "Quốc dân đại hội ở Tân Trào",
            c: "Lễ Tuyên ngôn Độc lập",
            d: "Tổng tuyển cử năm 1946"
        },
        correctAnswer: "b"
    },
    {
        question: "27. Nguyên nhân đầu tiên và có nguồn gốc sâu xa cho thắng lợi Cách mạng Tháng Tám năm 1945 ở Việt Nam là gì?",
        options: {
            a: "Sự ủng hộ của Liên Xô và Trung Quốc",
            b: "Đảng Cộng sản Đông Dương lãnh đạo đúng đắn",
            c: "Phong trào đấu tranh của nhân dân diễn ra quyết liệt",
            d: "Tinh thần dân tộc và yêu nước của nhân dân"
        },
        correctAnswer: "b"
    },
    {
        question: "28. Trong Cách mạng Tháng Tám năm 1945 ở Việt Nam, đường lối cách mạng nào do Đảng Cộng sản Đông Dương xác định phù hợp với nguyện vọng của đại đa số Nhân dân?",
        options: {
            a: "Đấu tranh giai cấp",
            b: "Đấu tranh chính trị",
            c: "Cách mạng ruộng đất",
            d: "Giải phóng dân tộc"
        },
        correctAnswer: "d"
    },
    {
        question: "29. Câu nói “Dù phải đốt cháy cả dãy Trường Sơn cũng phải kiên quyết giành cho được độc lập” là của ai?",
        options: {
            a: "Võ Nguyên Giáp",
            b: "Trường Chinh",
            c: "Hồ Chí Minh",
            d: "Lê Duẩn"
        },
        correctAnswer: "c"
    },
    {
        question: "30. Từ ngày 14 đến ngày 15/8/1945, Hội nghị toàn quốc của Đảng Cộng sản Đông Dương họp ở Tân Trào đã",
        options: {
            a: "Quyết định thành lập Việt Nam Giải phóng quân",
            b: "Phát động cuộc chiến tranh du kích",
            c: "Phát lệnh Tổng khởi nghĩa trong cả nước",
            d: "Thông qua Cương lĩnh chính trị của Đảng"
        },
        correctAnswer: "c"
    },
    {
        question: "31. Phong trào nào sau đây được coi là một trong những cuộc tập dượt chuẩn bị cho Cách mạng Tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Phong trào Cần Vương",
            b: "Phong trào Duy Tân",
            c: "Cao trào kháng Nhật cứu nước",
            d: "Phong trào Xô viết Nghệ Tĩnh"
        },
        correctAnswer: "c"
    },
    {
        question: "32. Trong Cách mạng Tháng Tám năm 1945 ở Việt Nam, cơ quan nào sau đây ban bố “Quân lệnh số 1”, chính thức phát lệnh Tổng khởi nghĩa trong cả nước?",
        options: {
            a: "Bộ Chính trị",
            b: "Ủy ban Khởi nghĩa toàn quốc",
            c: "Tổng bộ Việt Minh",
            d: "Ủy ban Dân tộc giải phóng Việt Nam"
        },
        correctAnswer: "b"
    },
    {
        question: "33. Văn kiện nào sau đây tuyên bố thành lập nước Việt Nam Dân chủ Cộng hòa?",
        options: {
            a: "Cương lĩnh chính trị đầu tiên của Đảng",
            b: "Lời kêu gọi toàn quốc kháng chiến",
            c: "Tuyên ngôn Độc lập",
            d: "Hiến pháp năm 1946"
        },
        correctAnswer: "c"
    },
    {
        question: "34. Cao trào kháng Nhật cứu nước (1945) ở Việt Nam có ý nghĩa nào sau đây?",
        options: {
            a: "Lật đổ chế độ thực dân Pháp",
            b: "Là một cuộc tập dượt trực tiếp cho Tổng khởi nghĩa tháng Tám",
            c: "Giải phóng toàn bộ miền Bắc",
            d: "Mở ra thời kỳ hòa bình"
        },
        correctAnswer: "b"
    },
    {
        question: "35. Việc chủ động phát động khởi nghĩa từng phần trước khi tổng khởi nghĩa thể hiện đặc điểm gì của Đảng trong chỉ đạo cách mạng?",
        options: {
            a: "Sự thiếu quyết đoán",
            b: "Sự bị động, lúng túng",
            c: "Sự linh hoạt, sáng tạo",
            d: "Sự phụ thuộc vào bên ngoài"
        },
        correctAnswer: "c"
    },
    {
        question: "36. Yếu tố nào được xem là “sức mạnh nội sinh” mang tính quyết định đối với thắng lợi của Cách mạng Tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Sự giúp đỡ của Liên Xô",
            b: "Sự sụp đổ của phát xít Nhật",
            c: "Sức mạnh đại đoàn kết toàn dân tộc",
            d: "Sự thay đổi của tình hình thế giới"
        },
        correctAnswer: "c"
    },
    {
        question: "37. Với thắng lợi của Cách mạng Tháng Tám năm 1945, trên thực tế nhân dân Việt Nam đã giành được chính quyền từ tay",
        options: {
            a: "Thực dân Pháp",
            b: "Phát xít Nhật",
            c: "Đế quốc Mĩ",
            d: "Phong kiến tay sai"
        },
        correctAnswer: "b"
    },
    {
        question: "38. Trong Cách mạng Tháng Tám năm 1945, Nhân dân Việt Nam đã nhất tề đứng dậy dưới ngọn cờ đoàn kết của tổ chức nào sau đây?",
        options: {
            a: "Đảng Cộng sản Đông Dương",
            b: "Mặt trận Tổ quốc Việt Nam",
            c: "Mặt trận Việt Minh",
            d: "Hội đồng chính phủ"
        },
        correctAnswer: "c"
    },
    {
        question: "39. Bối cảnh quốc tế nào đã tạo ra “thời cơ ngàn năm có một” cho Cách mạng Tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Chiến tranh thế giới thứ hai bùng nổ",
            b: "Liên Xô đánh bại phát xít Đức",
            c: "Nhật Bản tuyên bố đầu hàng Đồng minh",
            d: "Khối Đồng minh liên minh với Việt Minh"
        },
        correctAnswer: "c"
    },
    {
        question: "40. Cách mạng Tháng Tám thành công đã đập tan xiềng xích nô lệ của thực dân Pháp kéo dài bao lâu?",
        options: {
            a: "Gần 5 năm",
            b: "Hơn 30 năm",
            c: "Hơn 80 năm",
            d: "Gần 100 năm"
        },
        correctAnswer: "c"
    },
    {
        question: "41. Cách mạng Tháng Tám năm 1945 ở Việt Nam đã chấm dứt ách thống trị của lực lượng nào trong gần 5 năm?",
        options: {
            a: "Thực dân Pháp",
            b: "Phát xít Nhật",
            c: "Đế quốc Mĩ",
            d: "Chế độ phong kiến"
        },
        correctAnswer: "b"
    },
    {
        question: "42. Thắng lợi của Cách mạng Tháng Tám năm 1945 đã lật nhào chế độ chính trị nào đã tồn tại hàng thế kỷ ở Việt Nam?",
        options: {
            a: "Chế độ thuộc địa nửa phong kiến",
            b: "Chế độ phong kiến",
            c: "Chế độ tư bản",
            d: "Chế độ thực dân"
        },
        correctAnswer: "b"
    },
    {
        question: "43. Sự ra đời của nước Việt Nam Dân chủ Cộng hòa đã xác lập một nhà nước mới do ai làm chủ?",
        options: {
            a: "Do Đảng Cộng sản làm chủ",
            b: "Do giai cấp vô sản làm chủ",
            c: "Do nhân dân làm chủ",
            d: "Do nhà tư sản dân tộc làm chủ"
        },
        correctAnswer: "c"
    },
    {
        question: "44. Kỷ nguyên mới của dân tộc Việt Nam sau Cách mạng Tháng Tám năm 1945 không bao gồm đặc điểm nào sau đây?",
        options: {
            a: "Dân tộc độc lập, tự do",
            b: "Nhân dân lao động nắm chính quyền",
            c: "Trở thành một nước thuộc địa",
            d: "Gắn liền với chủ nghĩa xã hội"
        },
        correctAnswer: "c"
    },
    {
        question: "45. Sau thắng lợi của Cách mạng Tháng Tám năm 1945, vị thế của Đảng Cộng sản Đông Dương đã thay đổi như thế nào?",
        options: {
            a: "Từ một Đảng hoạt động bí mật trở thành Đảng cầm quyền",
            b: "Từ một tổ chức nhỏ trở thành một tổ chức lớn",
            c: "Từ một Đảng hoạt động công khai trở thành Đảng hoạt động bí mật",
            d: "Từ một Đảng không có tiếng nói trở thành Đảng có tiếng nói"
        },
        correctAnswer: "a"
    },
    {
        question: "46. Về phương diện quốc tế, thắng lợi của Cách mạng Tháng Tám năm 1945 ở Việt Nam có ý nghĩa gì?",
        options: {
            a: "Mở ra một kỷ nguyên mới cho chủ nghĩa tư bản",
            b: "Là sự kiện mở đầu cho Chiến tranh lạnh",
            c: "Thúc đẩy phong trào giải phóng dân tộc trên thế giới",
            d: "Giúp Liên Xô và các nước xã hội chủ nghĩa mở rộng ảnh hưởng"
        },
        correctAnswer: "c"
    },
    {
        question: "47. Cách mạng Tháng Tám năm 1945 ở Việt Nam đã cổ vũ các dân tộc thuộc địa đứng lên đấu tranh vì những mục tiêu nào sau đây?",
        options: {
            a: "Chỉ đấu tranh vì quyền dân tộc tự quyết",
            b: "Chỉ đấu tranh chống chủ nghĩa đế quốc",
            c: "Đấu tranh vì hòa bình, dân chủ và chủ nghĩa xã hội",
            d: "Đấu tranh vì độc lập dân tộc, dân chủ và tiến bộ xã hội"
        },
        correctAnswer: "d"
    },
    {
        question: "48. Sự kết hợp giữa thời cơ lịch sử thuận lợi và sự chuẩn bị chu đáo của Đảng cho thấy điều gì?",
        options: {
            a: "Sự may mắn, ngẫu nhiên của lịch sử",
            b: "Sự phụ thuộc vào yếu tố bên ngoài",
            c: "Sự linh hoạt, nhạy bén và chủ động của Đảng",
            d: "Sự chậm trễ trong chỉ đạo"
        },
        correctAnswer: "c"
    },
    {
        question: "49. Yếu tố nào là sự chuẩn bị trực tiếp về mặt chính quyền cho Cách mạng Tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Thành lập các Ủy ban lâm thời",
            b: "Thành lập các đội tự vệ",
            c: "Thành lập các Ủy ban Nhân dân cách mạng",
            d: "Thành lập các ban chỉ huy khởi nghĩa"
        },
        correctAnswer: "c"
    },
    {
        question: "50. Việc nhân dân ở cả ba miền, từ thành thị đến nông thôn, từ đất liền đến hải đảo đều nhất tề đứng dậy trong Cách mạng Tháng Tám năm 1945 cho thấy điều gì?",
        options: {
            a: "Sự lãnh đạo tuyệt đối của Đảng",
            b: "Sức mạnh của lực lượng vũ trang",
            c: "Sức mạnh đại đoàn kết toàn dân tộc",
            d: "Sự giúp đỡ của quốc tế"
        },
        correctAnswer: "c"
    },
    {
        question: "51. So với các cuộc đấu tranh giành độc lập trước đó, điểm khác biệt căn bản của Cách mạng Tháng Tám năm 1945 là gì?",
        options: {
            a: "Diễn ra rộng khắp trong cả nước",
            b: "Có sự tham gia của đông đảo nhân dân",
            c: "Kết hợp giữa đấu tranh chính trị và vũ trang",
            d: "Có sự lãnh đạo của một chính đảng tiên phong"
        },
        correctAnswer: "d"
    },
    {
        question: "52. Sau Cách mạng Tháng Tám năm 1945 ở Việt Nam, “Kỷ nguyên Nhân dân lao động nắm chính quyền” có nghĩa là gì?",
        options: {
            a: "Mọi người dân đều trở thành cán bộ lãnh đạo",
            b: "Người dân được làm chủ đất nước, quản lý xã hội",
            c: "Chỉ những người lao động mới có quyền bầu cử",
            d: "Quyền lực nhà nước thuộc về giai cấp công nhân"
        },
        correctAnswer: "b"
    },
    {
        question: "53. “Kỷ nguyên độc lập dân tộc gắn liền với chủ nghĩa xã hội” thể hiện điều gì trong đường lối của Đảng Cộng sản Việt Nam?",
        options: {
            a: "Đảng đã thay đổi mục tiêu ban đầu",
            b: "Đảng kiên định con đường xã hội chủ nghĩa",
            c: "Đảng thực hiện song song hai nhiệm vụ",
            d: "Đảng học theo mô hình của Liên Xô"
        },
        correctAnswer: "b"
    },
    {
        question: "54. Trong Cách mạng Tháng Tám năm 1945 ở Việt Nam, việc lật đổ cùng lúc cả ách thống trị của phát xít và thực dân có ý nghĩa gì?",
        options: {
            a: "Thể hiện sự triệt để của cách mạng",
            b: "Cho thấy sự may mắn của lịch sử",
            c: "Cho thấy sự lãnh đạo không nhất quán",
            d: "Thể hiện sự phụ thuộc vào bên ngoài"
        },
        correctAnswer: "a"
    },
    {
        question: "55. Sự ra đời của nước Việt Nam Dân chủ Cộng hòa năm 1945 là kết quả trực tiếp của sự kiện nào sau đây?",
        options: {
            a: "Sự thất bại của phát xít Nhật",
            b: "Thắng lợi của Tổng khởi nghĩa tháng Tám",
            c: "Tuyên ngôn Độc lập",
            d: "Cuộc Tổng tuyển cử đầu tiên"
        },
        correctAnswer: "b"
    },
    {
        question: "56. Tuyên ngôn Độc lập (02/9/1945) khai sinh ra nước Việt Nam Dân chủ Cộng hòa đã khẳng định điều gì trước toàn thế giới?",
        options: {
            a: "Việt Nam là một quốc gia theo chế độ phong kiến",
            b: "Việt Nam là một quốc gia dân chủ và độc lập",
            c: "Việt Nam là một quốc gia trung lập",
            d: "Việt Nam là một quốc gia thuộc Khối Xã hội chủ nghĩa"
        },
        correctAnswer: "b"
    },
    {
        question: "57. Yếu tố nào là điều kiện khách quan, bên ngoài, tạo thuận lợi cho Cách mạng Tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Sức mạnh đoàn kết toàn dân tộc",
            b: "Sự lãnh đạo của Đảng",
            c: "Sự sụp đổ của phát xít Nhật",
            d: "Truyền thống yêu nước của dân tộc"
        },
        correctAnswer: "c"
    },
    {
        question: "58. Ý nghĩa quan trọng của Cách mạng Tháng Tám năm 1945 đối với dân tộc Việt Nam là gì?",
        options: {
            a: "Đặt nền móng cho công cuộc Đổi mới sau này",
            b: "Mở ra kỷ nguyên độc lập, tự do cho dân tộc",
            c: "Làm thất bại âm mưu của các nước đế quốc",
            d: "Góp phần vào thắng lợi của Chiến tranh thế giới thứ hai"
        },
        correctAnswer: "b"
    },
    {
        question: "59. “Nhà nước do Nhân dân lao động làm chủ” sau Cách mạng Tháng Tám năm 1945 ở Việt Nam có bản chất khác biệt như thế nào so với nhà nước phong kiến?",
        options: {
            a: "Có sự tham gia của mọi tầng lớp nhân dân",
            b: "Thể hiện ý chí và nguyện vọng của đại đa số nhân dân",
            c: "Có tổ chức và bộ máy chặt chẽ hơn",
            d: "Đều phục vụ cho một giai cấp thống trị"
        },
        correctAnswer: "b"
    },
    {
        question: "60. Một trong những bài học kinh nghiệm rút ra từ thắng lợi của Cách mạng tháng Tám năm 1945 có thể vận dụng trong sự nghiệp xây dựng và bảo vệ Tổ quốc Việt Nam hiện nay là gì?",
        options: {
            a: "Chỉ tập trung vào đấu tranh vũ trang",
            b: "Đề cao vai trò của cá nhân, lãnh tụ",
            c: "Luôn nắm bắt và tận dụng thời cơ",
            d: "Phụ thuộc vào sự giúp đỡ của bên ngoài"
        },
        correctAnswer: "c"
    },
    {
        question: "61. Cách mạng tháng Tám năm 1945 ở Việt Nam để lại bài học kinh nghiệm nào sau đây cho sự nghiệp bảo vệ Tổ quốc?",
        options: {
            a: "Xây dựng lực lượng quân đội tinh nhuệ",
            b: "Phát huy sức mạnh khối đại đoàn kết toàn dân tộc",
            c: "Phát triển kinh tế là nhiệm vụ hàng đầu",
            d: "Phải dựa vào một nước lớn"
        },
        correctAnswer: "b"
    },
    {
        question: "62. Nội dung nào sau đây phản ánh đúng tính chất dân chủ của Cách mạng tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Lật đổ chế độ phong kiến, thiết lập nhà nước dân chủ",
            b: "Hoàn thành cuộc cách mạng xã hội chủ nghĩa",
            c: "Thực hiện cải cách ruộng đất",
            d: "Giải quyết mâu thuẫn giai cấp"
        },
        correctAnswer: "a"
    },
    {
        question: "63. Đối với cách mạng Việt Nam, việc phát xít Nhật đầu hàng Đồng minh không điều kiện (8-1945) đã",
        options: {
            a: "Tạo ra thời cơ \"ngàn năm có một\" để tổng khởi nghĩa",
            b: "Đưa quân Pháp quay trở lại Đông Dương",
            c: "Làm cho lực lượng cách mạng Việt Nam tan rã",
            d: "Khiến cho cuộc chiến tranh Đông Dương bùng nổ"
        },
        correctAnswer: "a"
    },
    {
        question: "64. Nội dung nào sau đây phản ánh đúng và đầy đủ về bối cảnh lịch sử của cuộc Tổng khởi nghĩa tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Nhật Bản đầu hàng Đồng minh, quân Đồng minh chưa vào",
            b: "Nhật Bản đầu hàng Đồng minh, quân Đồng minh đã vào",
            c: "Nhật Bản đầu hàng, quân Pháp đã trở lại",
            d: "Pháp bị Nhật hất cẳng, quân Đồng minh chưa vào"
        },
        correctAnswer: "a"
    },
    {
        question: "65. Một trong những điểm tương đồng của Cách mạng tháng Tám năm 1945 và hai cuộc kháng chiến chống ngoại xâm (1945-1975) ở Việt Nam là",
        options: {
            a: "Đều giành thắng lợi hoàn toàn",
            b: "Đều có sự giúp đỡ từ Liên Xô và Trung Quốc",
            c: "Đều có sự lãnh đạo của Đảng Cộng sản Việt Nam",
            d: "Đều diễn ra trong bối cảnh hòa bình"
        },
        correctAnswer: "c"
    },
    {
        question: "66. Thời cơ “ngàn năm có một” để nhân dân Việt Nam tổng khởi nghĩa giành chính quyền năm 1945 kết thúc khi",
        options: {
            a: "Chính phủ Trần Trọng Kim ra đời",
            b: "Quân Đồng minh vào Việt Nam giải giáp quân Nhật",
            c: "Pháp tiến hành tái xâm lược",
            d: "Đế quốc Mỹ can thiệp vào Đông Dương"
        },
        correctAnswer: "b"
    },
    {
        question: "67. Cách mạng tháng Tám năm 1945 ở Việt Nam thành công là kết quả thực hiện chủ trương của Đảng Cộng sản Đông Dương giai đoạn 1939 - 1945 về tiến hành cuộc cách mạng",
        options: {
            a: "Dân tộc dân chủ",
            b: "Xã hội chủ nghĩa",
            c: "Giải phóng dân tộc",
            d: "Dân chủ tư sản"
        },
        correctAnswer: "c"
    },
    {
        question: "68. Nội dung nào sau đây phản ánh đúng nghệ thuật chỉ đạo khởi nghĩa giành chính quyền trong Cách mạng tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Đấu tranh vũ trang là chủ yếu",
            b: "Phối hợp khởi nghĩa từng phần với tổng khởi nghĩa",
            c: "Chờ quân Đồng minh vào Việt Nam",
            d: "Khởi nghĩa đồng loạt trên toàn quốc"
        },
        correctAnswer: "b"
    },
    {
        question: "69. Tổ chức cách mạng nào sau đây đã lãnh đạo nhân dân Việt Nam tiến hành cuộc Cách mạng Tháng Tám năm 1945 giành được thắng lợi?",
        options: {
            a: "Mặt trận Tổ quốc Việt Nam",
            b: "Đảng Cộng sản Đông Dương",
            c: "Mặt trận Việt Minh",
            d: "Việt Nam Quốc dân Đảng"
        },
        correctAnswer: "c"
    },
    {
        question: "70. Nhận xét nào sau đây là đúng về cuộc Tổng khởi nghĩa tháng Tám năm 1945 ở Việt Nam?",
        options: {
            a: "Cuộc cách mạng diễn ra lâu dài, gian khổ",
            b: "Cuộc cách mạng thành công nhanh chóng, ít đổ máu",
            c: "Cuộc cách mạng diễn ra chủ yếu ở nông thôn",
            d: "Cuộc cách mạng chỉ có tính chất dân tộc"
        },
        correctAnswer: "b"
    },
    {
        question: "71. Nội dung nào sau đây phản ánh đúng tiến trình khởi nghĩa giành chính quyền của nhân dân Việt Nam trong năm 1945?",
        options: {
            a: "Tổng khởi nghĩa ở các thành phố lớn rồi lan ra cả nước",
            b: "Khởi nghĩa ở nông thôn rồi lan ra thành thị",
            c: "Tổng khởi nghĩa toàn bộ từ Bắc vào Nam",
            d: "Phát động khởi nghĩa từng phần và tiến đến Tổng khởi nghĩa"
        },
        correctAnswer: "d"
    },
    {
        question: "72. Tổ chức công khai nào được Đảng bộ các tỉnh Bến Tre, Vĩnh Long, Trà Vinh khéo léo tập hợp, huấn luyện và phát triển lực lượng quần chúng một cách hợp pháp, chuẩn bị cho Tổng khởi nghĩa tháng Tám 1945?",
        options: {
            a: "Thanh niên Tiền phong",
            b: "Việt Minh",
            c: "Đoàn Thanh niên Cộng sản",
            d: "Mặt trận Dân tộc thống nhất"
        },
        correctAnswer: "a"
    },
    {
        question: "73. Cuộc tổng khởi nghĩa giành chính quyền trong Cách mạng tháng 8 năm 1945 ở tỉnh lỵ Vĩnh Long đã nổ ra và thắng lợi vào ngày tháng năm nào?",
        options: {
            a: "19/8/1945",
            b: "23/8/1945",
            c: "25/8/1945",
            d: "2/9/1945"
        },
        correctAnswer: "b"
    },
    {
        question: "74. Chính quyền của Nhật ở tỉnh Vĩnh Long sụp đổ hoàn toàn vào ngày tháng năm nào?",
        options: {
            a: "20/8/1945",
            b: "23/8/1945",
            c: "25/8/1945",
            d: "2/9/1945"
        },
        correctAnswer: "b"
    },
    {
        question: "75. Trong khởi nghĩa giành chính quyền tháng 8/1945, hình thức đấu tranh chủ yếu của nhân dân Vĩnh Long là",
        options: {
            a: "Đấu tranh chính trị",
            b: "Đấu tranh vũ trang",
            c: "Đấu tranh chính trị kết hợp với đấu tranh vũ trang",
            d: "Đấu tranh du kích"
        },
        correctAnswer: "c"
    },
    {
        question: "76. Đơn vị bộ đội đầu tiên của tỉnh Vĩnh Long được thành lập sau khi Cách mạng tháng 8 năm 1945 thành công có tên gọi gì?",
        options: {
            a: "Chi đội Giải phóng quân",
            b: "Chi đội Tiền phong",
            c: "Chi đội số 17",
            d: "Chi đội Việt Minh"
        },
        correctAnswer: "c"
    },
    {
        question: "77. Hãy cho biết mốc thời gian tổ chức Thanh Niên Tiền Phong tỉnh Trà Vinh ra đời?",
        options: {
            a: "12/6/1945",
            b: "15/8/1945",
            c: "25/8/1945",
            d: "19/5/1945"
        },
        correctAnswer: "a"
    },
    {
        question: "78. Hãy cho biết Ủy ban nhân dân tỉnh Trà Vinh chính thức ra mắt vào ngày, tháng, năm nào? Do ai làm Chủ tịch?",
        options: {
            a: "23/8/1945, ông Dương Quang Đông",
            b: "25/8/1945, ông Dương Quang Đông",
            c: "25/8/1945, ông Lương Văn Chúc",
            d: "2/9/1945, ông Tôn Đức Thắng"
        },
        correctAnswer: "b"
    },
    {
        question: "79. Đêm 24, rạng 25/8/1945, ngọn lửa Tổng khởi nghĩa bùng cháy trên toàn tỉnh Trà Vinh. Hãy cho biết cuộc khởi nghĩa nổ ra đầu tiên ở đâu?",
        options: {
            a: "Thị xã Trà Vinh",
            b: "Càng Long",
            c: "Tiểu Cần",
            d: "Cầu Kè"
        },
        correctAnswer: "b"
    },
    {
        question: "80. Hãy cho biết Mặt trận Việt Minh tỉnh Bến Tre được thành lập khi nào? Do ai phụ trách?",
        options: {
            a: "Tháng 11/1941, Lương Văn Chúc",
            b: "Tháng 3/1945, Huỳnh Văn Hớn",
            c: "Tháng 11/1941, Huỳnh Văn Hớn",
            d: "Tháng 11/1941, Phạm Ngọc Thạch"
        },
        correctAnswer: "a"
    },
    {
        question: "81. Cách mạng tháng Tám thành công trên địa bàn tỉnh Bến Tre vào ngày, tháng, năm nào?",
        options: {
            a: "23/8/1945",
            b: "24/8/1945",
            c: "25/8/1945",
            d: "2/9/1945"
        },
        correctAnswer: "c"
    },
    {
        question: "82. Người cầm cờ đỏ sao vàng, dẫn đầu đoàn biểu tình tiến chiếm tỉnh lỵ Bến Tre trong Cách mạng Tháng Tám năm 1945 là",
        options: {
            a: "Nguyễn Văn Cung (Mười Vĩnh)",
            b: "Huỳnh Văn Hớn",
            c: "Lương Văn Chúc",
            d: "Tôn Đức Thắng"
        },
        correctAnswer: "a"
    },
    {
        question: "83. Ai được bầu làm Chủ tịch Ủy ban nhân dân cách mạng tỉnh Bến Tre sau khi Cách mạng Tháng Tám năm 1945 thành công?",
        options: {
            a: "Nguyễn Văn Cung",
            b: "Huỳnh Văn Hớn",
            c: "Lương Văn Chúc",
            d: "Dương Quang Đông"
        },
        correctAnswer: "b"
    },
    {
        question: "84. Ai được bầu làm chủ tịch Ủy ban nhân dân cách mạng tỉnh Vĩnh Long sau khi Cách mạng Tháng Tám năm 1945 thành công?",
        options: {
            a: "Nguyễn Văn Tây (Trần Văn Cung)",
            b: "Lương Văn Chúc",
            c: "Dương Quang Đông",
            d: "Phạm Ngọc Thạch"
        },
        correctAnswer: "a"
    },
    {
        question: "85. Ai được cử làm Chủ tịch Ủy ban Nhân dân Cách mạng tỉnh Trà Vinh sau khi Cách mạng Tháng Tám năm 1945 thành công?",
        options: {
            a: "Lương Văn Chúc",
            b: "Huỳnh Văn Hớn",
            c: "Dương Quang Đông",
            d: "Trần Văn Cung"
        },
        correctAnswer: "c"
    },
    {
        question: "86. Sự kiện nào đánh dấu chính quyền của Nhật ở Vĩnh Long sụp đổ hoàn toàn?",
        options: {
            a: "Quân Nhật rút khỏi tỉnh Vĩnh Long",
            b: "Cuộc khởi nghĩa giành chính quyền ở tỉnh lỵ Vĩnh Long ngày 23/8/1945",
            c: "Tuyên bố của vua Bảo Đại",
            d: "Quân Đồng minh vào giải giáp"
        },
        correctAnswer: "b"
    },
    {
        question: "87. Cuộc tổng khởi nghĩa giành chính quyền trong Cách mạng tháng Tám trên địa bàn tỉnh Vĩnh Long giành thắng lợi là nhờ những nhân tố nào sau đây?",
        options: {
            a: "Sự giúp đỡ từ bên ngoài",
            b: "Lực lượng vũ trang mạnh",
            c: "Sự lãnh đạo của Đảng bộ tỉnh và sức mạnh của Thanh niên Tiền phong",
            d: "Sự đầu hàng của quân Nhật"
        },
        correctAnswer: "c"
    },
    {
        question: "88. Khó khăn nghiêm trọng nhất của nước Việt Nam Dân chủ Cộng hòa sau Cách mạng tháng Tám năm 1945 là",
        options: {
            a: "Kinh tế kiệt quệ, ngân khố trống rỗng",
            b: "\"Giặc đói, giặc dốt, giặc ngoại xâm\"",
            c: "Pháp âm mưu quay lại xâm lược",
            d: "Nội bộ Chính phủ chia rẽ"
        },
        correctAnswer: "b"
    },
    {
        question: "89. Kẻ thù chính của nước Việt Nam Dân chủ Cộng hòa sau Cách mạng tháng Tám (1945) là",
        options: {
            a: "Phát xít Nhật",
            b: "Thực dân Pháp",
            c: "Đế quốc Mỹ",
            d: "Tàn dư phong kiến"
        },
        correctAnswer: "b"
    },
    {
        question: "90. Trong những năm 1945-1946, nước Việt Nam Dân chủ Cộng hòa có thuận lợi nào sau đây?",
        options: {
            a: "Kinh tế phát triển mạnh",
            b: "Vừa thành lập đã có sự công nhận quốc tế",
            c: "Có sự lãnh đạo của Đảng Cộng sản Đông Dương",
            d: "Không phải đối phó với kẻ thù bên ngoài"
        },
        correctAnswer: "c"
    },
    {
        question: "91. Trong những năm 1945 - 1946, nhân dân Việt Nam có hoạt động nào sau đây nhằm xây dựng chính quyền cách mạng?",
        options: {
            a: "Kêu gọi các nước giúp đỡ",
            b: "Cải cách ruộng đất",
            c: "Tổng tuyển cử bầu Quốc hội",
            d: "Tiến hành chiến tranh du kích"
        },
        correctAnswer: "c"
    },
    {
        question: "92. Một trong những nội dung của đường lối kháng chiến chống thực dân Pháp do Đảng Cộng sản Đông Dương đề ra (12/1946) là",
        options: {
            a: "Toàn diện, toàn dân, toàn lực",
            b: "Đánh nhanh thắng nhanh",
            c: "Toàn dân, toàn diện, trường kỳ, tự lực cánh sinh",
            d: "Dựa vào sự giúp đỡ của các nước lớn"
        },
        correctAnswer: "c"
    },
    {
        question: "93. Đảng, Chính phủ và Chủ tịch Hồ Chí Minh quyết định phát động cuộc kháng chiến toàn quốc chống thực dân Pháp xâm lược (19/12/1946) là do",
        options: {
            a: "Pháp tấn công Lạng Sơn",
            b: "Pháp gửi tối hậu thư đòi ta giao nộp vũ khí và kiểm soát thủ đô Hà Nội",
            c: "Ta đã chuẩn bị đầy đủ mọi mặt cho chiến tranh",
            d: "Liên Xô đề nghị Việt Nam kháng chiến"
        },
        correctAnswer: "b"
    },
    {
        question: "94. Trong cuộc kháng chiến chống thực dân Pháp (1945 - 1954), thắng lợi quân sự nào của quân dân Việt Nam đã buộc thực dân Pháp kí Hiệp định Giơ-ne-vơ, chấm dứt chiến tranh xâm lược?",
        options: {
            a: "Chiến thắng Việt Bắc",
            b: "Chiến dịch Biên giới",
            c: "Chiến dịch Điện Biên Phủ",
            d: "Chiến dịch Đông Xuân 1953-1954"
        },
        correctAnswer: "c"
    },
    {
        question: "95. Ngay sau khi Hiệp định Giơ-ne-vơ năm 1954 về Đông Dương được ký kết, đế quốc Mĩ thực hiện âm mưu biến miền Nam Việt Nam thành",
        options: {
            a: "Căn cứ cách mạng của thế giới",
            b: "Thuộc địa kiểu mới và căn cứ quân sự",
            c: "Một quốc gia độc lập, thống nhất",
            d: "Một nước trung lập"
        },
        correctAnswer: "b"
    },
    {
        question: "96. Trong thời kì 1954 - 1975, sự kiện nào đánh dấu cách mạng Việt Nam hoàn thành nhiệm vụ “đánh cho nguỵ nhào” ?",
        options: {
            a: "Chiến thắng Điện Biên Phủ",
            b: "Hiệp định Pa-ri được ký kết",
            c: "Tổng tiến công và nổi dậy Xuân Mậu Thân",
            d: "Chiến dịch Hồ Chí Minh"
        },
        correctAnswer: "d"
    },
    {
        question: "97. Cuộc kháng chiến chống Mỹ, cứu nước của nhân dân Việt Nam (1954-1975) kết thúc với thắng lợi của chiến dịch nào sau đây?",
        options: {
            a: "Chiến dịch Thượng Lào",
            b: "Chiến dịch Hồ Chí Minh",
            c: "Chiến dịch Điện Biên Phủ",
            d: "Chiến dịch Biên giới"
        },
        correctAnswer: "b"
    },
    {
        question: "98. Nhân tố hàng đầu đảm bảo thắng lợi của cuộc kháng chiến chống Mĩ, cứu nước (1954-1975) là",
        options: {
            a: "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
            b: "Sự giúp đỡ của Liên Xô và Trung Quốc",
            c: "Tinh thần chiến đấu dũng cảm của nhân dân",
            d: "Sức mạnh của khối đại đoàn kết dân tộc"
        },
        correctAnswer: "a"
    },
    {
        question: "99. Một trong những mục tiêu của đường lối đổi mới ở Việt Nam được đề ra từ tháng 12/1986 là",
        options: {
            a: "Xóa bỏ chế độ sở hữu tư nhân",
            b: "Tập trung phát triển kinh tế nhà nước",
            c: "Xây dựng nền kinh tế thị trường định hướng xã hội chủ nghĩa",
            d: "Thực hiện bao cấp toàn bộ"
        },
        correctAnswer: "c"
    },
    {
        question: "100. Đường lối đổi mới toàn diện và đồng bộ đất nước do Đảng Cộng sản Việt Nam tiến hành lần đầu tiên được thông qua tại Đại hội đại biểu toàn quốc",
        options: {
            a: "Lần thứ V (1982)",
            b: "Lần thứ VI (1986)",
            c: "Lần thứ VII (1991)",
            d: "Lần thứ VIII (1996)"
        },
        correctAnswer: "b"
    },
    {
        question: "101. Trọng tâm của công cuộc Đổi mới ở Việt Nam (từ năm 1986) là tập trung vào lĩnh vực",
        options: {
            a: "Chính trị",
            b: "Văn hóa - xã hội",
            c: "Kinh tế",
            d: "An ninh - quốc phòng"
        },
        correctAnswer: "c"
    },
    {
        question: "102. Từ năm 1986 đến nay, kinh tế Việt Nam đã chuyển đổi từ mô hình quản lí kinh tế theo cơ chế tập trung, bao cấp, sang mô hình kinh tế nào?",
        options: {
            a: "Kinh tế kế hoạch hóa",
            b: "Kinh tế thị trường định hướng xã hội chủ nghĩa",
            c: "Kinh tế tư bản chủ nghĩa",
            d: "Kinh tế hỗn hợp"
        },
        correctAnswer: "b"
    },
    {
        question: "103. Thành quả của gần 40 năm đổi mới ở Việt Nam đã chứng minh điều gì?",
        options: {
            a: "Đường lối đổi mới của Đảng còn nhiều sai sót",
            b: "Đường lối đổi mới của Đảng là đúng đắn, sáng tạo",
            c: "Việt Nam cần học hỏi hoàn toàn từ các nước tư bản",
            d: "Kinh tế phát triển không đi đôi với văn hóa"
        },
        correctAnswer: "b"
    },
    {
        question: "104. Một trong những nguyên tắc hàng đầu được thực hiện trong quá trình đổi mới ở Việt Nam là gì?",
        options: {
            a: "Thay đổi toàn bộ thể chế chính trị",
            b: "Kiên định mục tiêu độc lập dân tộc và chủ nghĩa xã hội",
            c: "Ưu tiên phát triển kinh tế thị trường tự do",
            d: "Từ bỏ các giá trị truyền thống"
        },
        correctAnswer: "b"
    },
    {
        question: "105. Thế trận quốc phòng của Việt Nam được xây dựng dựa trên nền tảng nào sau đây?",
        options: {
            a: "Nền quốc phòng tinh nhuệ, hiện đại",
            b: "Nền quốc phòng toàn dân, an ninh nhân dân",
            c: "Nền quốc phòng dựa vào sự giúp đỡ của nước ngoài",
            d: "Nền quốc phòng dựa vào công nghệ cao"
        },
        correctAnswer: "b"
    },
    {
        question: "106. Một trong những bài học kinh nghiệm quan trọng nhất được rút ra từ thực tiễn công cuộc Đổi mới ở Việt Nam từ năm 1986?",
        options: {
            a: "Phải luôn tuân theo sự chỉ đạo của các nước lớn",
            b: "Phải tuyệt đối bảo vệ kinh tế nhà nước",
            c: "Phải kết hợp sức mạnh dân tộc với sức mạnh thời đại",
            d: "Phải từ bỏ nguyên tắc tập trung dân chủ"
        },
        correctAnswer: "c"
    },
    {
        question: "107. Tổ chức nào sau đây giữ vai trò tập hợp, đoàn kết toàn thể dân tộc trong thời kỳ xây dựng và bảo vệ Tổ quốc?",
        options: {
            a: "Đoàn Thanh niên Cộng sản Hồ Chí Minh",
            b: "Mặt trận Tổ quốc Việt Nam",
            c: "Tổng Liên đoàn Lao động Việt Nam",
            d: "Hội Liên hiệp Phụ nữ Việt Nam"
        },
        correctAnswer: "b"
    },
    {
        question: "108. Tư tưởng cốt lõi của Chủ tịch Hồ Chí Minh về Nhà nước pháp quyền là gì?",
        options: {
            a: "\"Đảng làm chủ, dân làm thợ\"",
            b: "\"Pháp luật là trên hết\"",
            c: "\"Lấy dân làm gốc\"",
            d: "\"Làm theo ý chí của lãnh đạo\""
        },
        correctAnswer: "c"
    },
    {
        question: "109. Hiến pháp năm 2013 đã cụ thể hóa những định hướng về Nhà nước pháp quyền từ văn kiện nào?",
        options: {
            a: "Hiệp định Pa-ri",
            b: "Cương lĩnh xây dựng đất nước năm 2011",
            c: "Tuyên ngôn Độc lập",
            d: "Nghị quyết Đại hội XIII"
        },
        correctAnswer: "b"
    },
    {
        question: "110. Một trong những kết quả quan trọng của công cuộc xây dựng Nhà nước pháp quyền là gì?",
        options: {
            a: "Xóa bỏ hoàn toàn bộ máy nhà nước cũ",
            b: "Hoàn thiện hệ thống pháp luật, đảm bảo quyền con người",
            c: "Tất cả mọi người đều được miễn trừ trách nhiệm",
            d: "Không còn các cơ quan hành chính"
        },
        correctAnswer: "b"
    },
    {
        question: "111. Đại hội XIII của Đảng xác định nhiệm vụ trọng tâm của đổi mới hệ thống chính trị là gì?",
        options: {
            a: "Thay thế hoàn toàn cán bộ cũ bằng cán bộ trẻ",
            b: "Tinh gọn bộ máy, tăng cường hiệu lực, hiệu quả",
            c: "Tăng cường số lượng cán bộ, công chức",
            d: "Củng cố quyền lực của Đảng"
        },
        correctAnswer: "b"
    },
    {
        question: "112. Đâu là một trong “ba đột phá chiến lược” được Đại hội XIII xác định?",
        options: {
            a: "Phát triển nông nghiệp truyền thống",
            b: "Tăng cường sản xuất công nghiệp nặng",
            c: "Phát triển nguồn nhân lực chất lượng cao",
            d: "Mở rộng giao thương sang phương Tây"
        },
        correctAnswer: "c"
    },
    {
        question: "113. Động lực chủ yếu để nâng cao năng suất, chất lượng, hiệu quả của nền kinh tế Việt Nam trong giai đoạn mới là gì?",
        options: {
            a: "Tăng cường đầu tư nước ngoài",
            b: "Phát triển khoa học - công nghệ và đổi mới sáng tạo",
            c: "Tăng cường khai thác tài nguyên thiên nhiên",
            d: "Tăng số lượng lao động phổ thông"
        },
        correctAnswer: "b"
    },
    {
        question: "114. Việt Nam đang đẩy mạnh chuyển đổi sang các mô hình kinh tế nào để phát triển bền vững?",
        options: {
            a: "Kinh tế bao cấp và kế hoạch hóa",
            b: "Kinh tế tuần hoàn, kinh tế xanh, kinh tế số",
            c: "Kinh tế tập trung và độc quyền",
            d: "Kinh tế chỉ dựa vào xuất khẩu tài nguyên"
        },
        correctAnswer: "b"
    },
    {
        question: "115. Để phát triển nguồn lực con người, Việt Nam tập trung vào lĩnh vực nào sau đây?",
        options: {
            a: "Đầu tư vào quốc phòng",
            b: "Tăng cường sản xuất nông nghiệp",
            c: "Khoa học - công nghệ và giáo dục, đào tạo",
            d: "Xây dựng các khu công nghiệp lớn"
        },
        correctAnswer: "c"
    },
    {
        question: "116. Vai trò của đối ngoại Việt Nam trong kỷ nguyên mới là gì?",
        options: {
            a: "Hợp tác có chọn lọc với một số nước",
            b: "Chủ động hội nhập quốc tế và giữ vững độc lập, tự chủ",
            c: "Chỉ tập trung vào các nước xã hội chủ nghĩa",
            d: "Tách biệt khỏi các tổ chức quốc tế"
        },
        correctAnswer: "b"
    },
    {
        question: "117. Việc xây dựng, chỉnh đốn Đảng và hệ thống chính trị trong sạch, vững mạnh nhằm mục đích gì?",
        options: {
            a: "Củng cố quyền lực tuyệt đối của Đảng",
            b: "Nâng cao năng lực lãnh đạo, chống tham nhũng, lãng phí",
            c: "Lấy lòng các nước lớn",
            d: "Bắt chước mô hình của các nước phương Tây"
        },
        correctAnswer: "b"
    },
    {
        question: "118. Nhằm chuẩn bị cho kỉ nguyên vươn mình của dân tộc, Trung ương đã thực hiện chủ trương sáp nhập tỉnh, thực hiện mô hình chính quyền địa phương hai cấp. Sau sáp nhập, tỉnh Vĩnh Long có bao nhiêu đơn vị hành chính cấp xã?",
        options: {
            a: "150 đơn vị",
            b: "165 đơn vị",
            c: "180 đơn vị",
            d: "192 đơn vị"
        },
        correctAnswer: "a"
    },
    {
        question: "119. Sau sáp nhập, tỉnh Vĩnh Long mới được kỳ vọng trở thành trung tâm của đồng bằng sông Cửu Long trong lĩnh vực kinh tế nào sau đây?",
        options: {
            a: "Sản xuất nông nghiệp quy mô nhỏ",
            b: "Công nghiệp nặng và khai thác khoáng sản",
            c: "Kinh tế số, du lịch và nông nghiệp công nghệ cao",
            d: "Đóng tàu và luyện kim"
        },
        correctAnswer: "c"
    },
    {
        question: "120. Để phát huy thế mạnh sẵn có, một trong những giải pháp tỉnh Vĩnh Long cần phải thực hiện để bước vào kỷ nguyên vươn mình của dân tộc là gì?",
        options: {
            a: "Mở rộng diện tích trồng lúa",
            b: "Tập trung xây dựng các khu công nghiệp truyền thống",
            c: "Đẩy mạnh chuyển đổi số, phát triển kinh tế xanh, bền vững",
            d: "Hạn chế giao thương với các tỉnh lân cận"
        },
        correctAnswer: "c"
    }
];

const questionsContainer = document.getElementById('questions-container');
const quizForm = document.getElementById('quiz-form');
const resultsContainer = document.getElementById('results-container');
const scoreText = document.getElementById('score-text');
const feedbackContainer = document.getElementById('feedback-container');

function buildQuiz() {
    quizData.forEach((quiz, index) => {
        const questionCard = document.createElement('div');
        questionCard.classList.add('question-card');
        
        const questionText = document.createElement('div');
        questionText.classList.add('question-text');
        questionText.textContent = quiz.question;
        
        const optionsList = document.createElement('ul');
        optionsList.classList.add('options-list');
        
        for (const key in quiz.options) {
            if (quiz.options.hasOwnProperty(key)) {
                const optionItem = document.createElement('li');
                optionItem.classList.add('option');
                
                const radioInput = document.createElement('input');
                radioInput.type = 'radio';
                radioInput.id = `q${index}-${key}`;
                radioInput.name = `q${index}`;
                radioInput.value = key;
                
                const label = document.createElement('label');
                label.htmlFor = `q${index}-${key}`;
                label.textContent = quiz.options[key];
                
                optionItem.appendChild(radioInput);
                optionItem.appendChild(label);
                optionsList.appendChild(optionItem);
            }
        }
        
        questionCard.appendChild(questionText);
        questionCard.appendChild(optionsList);
        questionsContainer.appendChild(questionCard);
    });
}

function showResults() {
    const answerContainers = questionsContainer.querySelectorAll('.question-card');
    let score = 0;

    quizData.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=q${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        const options = answerContainer.querySelectorAll('.option');
        options.forEach(option => {
            if (option.querySelector('input').value === currentQuestion.correctAnswer) {
                option.classList.add('correct');
            } else {
                option.classList.add('incorrect');
            }
        });

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    });

    resultsContainer.style.display = 'block';
    scoreText.textContent = `Bạn đã trả lời đúng ${score} trên tổng số ${quizData.length} câu.`;
}

buildQuiz();

quizForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showResults();
});
