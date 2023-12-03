
        document.getElementById('number-type').addEventListener('input', function() {
            var numberTypeValue = parseInt(this.value);
            var selectContainer = document.getElementById('select-container');

            // Xóa các select cũ
            while (selectContainer.firstChild) {
                selectContainer.removeChild(selectContainer.firstChild);
            }

            // Gọi API để lấy danh sách các items
            $.get('/api/items', function(data) {
                for (var i = 0; i < numberTypeValue; i++) {
                    var select = document.createElement('select');
                    select.name = 'flowerTypes[' + i + ']';

                    // Thêm các option từ dữ liệu API vào đây
                    $.each(data, function(index, item) {
                        var option = document.createElement('option');
                        option.value = item.id;
                        option.text = item.name;
                        select.appendChild(option);
                    });

                    selectContainer.appendChild(select);
                }
            });
        });
        document.getElementById('product-form').addEventListener('submit', function() {
            var selectedItems = [];

            // Lặp qua tất cả các select box
            var selects = document.querySelectorAll('select[name^="flowerTypes"]');
            selects.forEach(function(select) {
                var selectedOption = select.options[select.selectedIndex];
                selectedItems.push(selectedOption.value);
            });

            // Tạo một input ẩn để chứa danh sách các ID item
            var input = document.createElement('input');
            input.type = 'hidden';
            input.name = 'selectedItems';
            input.value = JSON.stringify(selectedItems);

            // Thêm input vào form
            this.appendChild(input);
        });