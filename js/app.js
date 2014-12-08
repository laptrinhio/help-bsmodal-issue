$(document).ready(function() {

    $('#btn-update').click(function(e) {
        // Cái này để bỏ thuộc tính mặc định khi submit form
        // phải gọi nếu không thì việc cập nhật DOM sẽ thất 
        e.preventDefault(); 

        // 1. tiếp theo tại đây bạn làm việc xử lý post/update data lên server
        // dùng AJAX hay cái gì tuỳ bạn
        // ...

        // 2. tại đây thì bạn làm việc cập nhật dữ liệu mới vào DOM
        // - mang tính chất demo nên mình sẽ thay đổi trực tiếp bằng giá trị trong 
        // ô input#content
        content = $('#content').val();
        current = $('#main-content').text();

        $('#main-content').text( current + ' :: ' + content );

    });
});
