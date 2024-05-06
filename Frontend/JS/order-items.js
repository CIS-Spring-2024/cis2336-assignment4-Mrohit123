      //var subTotal = 0;

      /* function to add user selected food items to cart */
      function addToCart() {
        
        var idValue = this.id;
        var checked = this.checked;
        var qtyValue = document.getElementById("qty"+idValue).value;
        var seletectedItemsList = document.getElementById('seletectedItems');

        if (checked == true) {
            if (qtyValue <= 0 || qtyValue > 10 || qtyValue%1 !=0 ) {
              alert("Please enter value between 1 and 10 in Quantity field");
              this.checked = false;
              return;
            }
            //subTotal = subTotal + parseFloat((menuitems[idValue].price) * (qtyValue));
        } else {
            document.getElementById("qty"+idValue).value='';
            //subTotal = subTotal - parseFloat((menuitems[idValue].price) * (qtyValue));
        }

        var elementSelected = document.getElementById('seletectedItems');
        while(elementSelected.firstChild){
          elementSelected.removeChild(elementSelected.firstChild);
        }
        
        /* block to display all the user selected items in the right pane*/
        menuitems.forEach(element => {
          if(document.getElementById(element.id).checked) {
            var selectedRow =  document.createElement('tr');
            var selectedCell1  =  document.createElement('td');
            var selectedCell2  =  document.createElement('td');
            var nameValue = document.createTextNode(element.name + "("+document.getElementById("qty"+element.id).value+")");
            var priceValue = document.createTextNode((element.price * document.getElementById("qty"+element.id).value).toFixed(2));

            var priceValueHidden = document.createElement("input");
            priceValueHidden.type="hidden";
            priceValueHidden.id = "priceValueHidden"+i
            priceValueHidden.name = "priceValueHiddenId"+i
            priceValueHidden.value = (element.price * document.getElementById("qty"+element.id).value).toFixed(2);

            selectedCell1.appendChild(nameValue);
            selectedCell2.appendChild(priceValue);
            selectedRow.appendChild(selectedCell1);
            selectedRow.appendChild(selectedCell2);
            selectedRow.appendChild(priceValueHidden);
            seletectedItemsList = document.getElementById('seletectedItems');
            seletectedItemsList.appendChild(selectedRow);
          }
        });

        /* block to display Sub Total row */
        /*console.log(subTotal);
        document.getElementById("subTotalId").value=subTotal.toFixed(2);

        if (subTotal > 0) {
          var subTotalRow =  document.createElement('tr');
          var subTotalCell1  =  document.createElement('td');
          var subTotalCell2  =  document.createElement('td');

          var nameValue = document.createTextNode("Sub Total");
          
          var priceValue = document.createTextNode("$"+subTotal.toFixed(2));
          subTotalCell1.appendChild(nameValue);
          subTotalCell2.appendChild(priceValue);
          subTotalRow.appendChild(subTotalCell1);
          subTotalRow.appendChild(subTotalCell2);
          seletectedItemsList = document.getElementById('seletectedItems');
          seletectedItemsList.appendChild(subTotalRow);
        }*/
        return;

    }

      /* Reading all the menu items from menu.js and displaying in html left pane */

      var tableItems = document.getElementById('itemslist');
      var i = 0;
      menuitems.forEach(element => {
        var menuitemsRow =  document.createElement('tr');
        var menuitemsCell0  =  document.createElement('td');
        var menuitemsCell1  =  document.createElement('td');
        var menuitemsCell2  =  document.createElement('td');
        var menuitemsCell3  =  document.createElement('td');
        var menuitemsCell4  =  document.createElement('td');
        var nameValue = document.createTextNode(element.name);
        var priceValue = document.createTextNode('$'+element.price.toFixed(2));
        
        /*var priceValueHidden = document.createElement("input");
        priceValueHidden.type="hidden";
        priceValueHidden.id = "priceValueHidden"+i
        priceValueHidden.name = "priceValueHiddenId"+i
        priceValueHidden.value = element.price.toFixed(2)*/

        var imgValue = document.createElement("img");
        imgValue.src = element.image;
        imgValue.style = "width: 200px; height:200px";
        
        var qtyValue = document.createElement("input");
        qtyValue.type="number";
        qtyValue.min = 1;
        qtyValue.max = 100;
        qtyValue.id = "qty"+i
        //qtyValue.name = "qty"+i
        qtyValue.style = "width:80%; height:30px;";

        var checkboxElement = document.createElement("input");
        checkboxElement.type="checkbox";
        checkboxElement.id=i;
        checkboxElement.name="itemcheckbox";
        checkboxElement.addEventListener("click",addToCart);
        checkboxElement.onclick="addToCart()";
        
        menuitemsCell0.appendChild(imgValue);
        menuitemsCell1.appendChild(nameValue);
        menuitemsCell2.appendChild(priceValue);
        //menuitemsCell2.appendChild(priceValueHidden);
        menuitemsCell3.appendChild(qtyValue);
        menuitemsCell4.appendChild(checkboxElement);
        menuitemsRow.appendChild(menuitemsCell0);
        menuitemsRow.appendChild(menuitemsCell1);
        menuitemsRow.appendChild(menuitemsCell2);
        menuitemsRow.appendChild(menuitemsCell3);
        menuitemsRow.appendChild(menuitemsCell4);
        tableItems.appendChild(menuitemsRow);
        i++;
      });

      /*document.querySelector('button[type = "submit"]').addEventListener('click', function(e){
          e.preventDefault();
          if (subTotal > 0 ) {
            alert('submitting the order with subtotal of '+subTotal.toFixed(2)+' for processing now');
          } else {
            alert('please select items for order');
          }
      });*/