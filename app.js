//list of tables
const tables =  [
  {
      "id":1,
      "name":"Table-1",
      "totalCost":0,
      "totalItems":0,
      "orders":[]
  },
  {
      "id":2,
      "name":"Table-2",
      "totalCost":0,
      "totalItems":0,
      "orders":[]
  },
  {
      "id":3,
      "name":"Table-3",
      "totalCost":0,
      "totalItems":0,
      "orders":[]
  }
];
//menu items
const items=[
  {
      "id":1,
      "name":"Veg Biriyani",
      "cost":250,
      "course":"main"
  },
  {
    "id":2,
    "name":"Chicken Biriyani",
    "cost":350,
    "course":"main"
  },
  {
      "id":3,
      "name":"French Fries",
      "cost":105,
      "course":"entree"
  },
  {
    "id":4,
    "name":"French Fries with Cheese",
    "cost":135,
    "course":"entree" 
  },
  {
      "id":5,
      "name":"Special Veg Biriyani",
      "cost":300,
      "course":"special"
  },
  {
      "id":6,
      "name":"Boneless Chicken Biriyani",
      "cost":400,
      "course":"special"
  },
  {
      "id":7,
      "name":"Paneer 65",
      "cost":200,
      "course":"entree"
  }  
]
document.addEventListener("DOMContentLoaded",  function load(){
      // load table details 
      for(let i = 0; i < tables.length;i++){
          let tableCard = document.createElement("div");
          let tableBody = document.createElement("div");
          let tableTitle = document.createElement("h5");
          let tableCost = document.createElement("h6");
          tableCard.setAttribute("class","card mt-2 table");
          tableCard.setAttribute("id","table-"+(i+1));
          tableCard.setAttribute("data-toggle","modal");
          tableCard.setAttribute("data-target","#exampleModal-"+(i+1));
          tableBody.setAttribute("class","card-body");
          tableTitle.setAttribute("class","card-title");
          tableCost.setAttribute("class","card-subtitle mb-2 text-muted pt-2");
          tableTitle.innerHTML = `${tables[i].name}`;
          tableCost.innerHTML = `cost: ${tables[i].totalCost} | total items: ${tables[i].totalItems}`;
          tableBody.appendChild(tableTitle);
          tableBody.appendChild(tableCost);
          tableCard.appendChild(tableBody);
          document.getElementById("table-container").appendChild(tableCard);
          document.getElementById("table-"+(i+1)).addEventListener("click",()=>{
              
              tableDetails(tables[i])
          });
          document.getElementById("table-"+(i+1)).addEventListener("dragover",(event)=>{
              event.preventDefault();
          });
          document.getElementById("table-"+(i+1)).addEventListener("drop",dragDrop);
          let model = document.createElement("div");
          model.setAttribute("class","modal fade");
          model.setAttribute("id","exampleModal-"+(i+1));
          model.setAttribute("tabindex",-1);
          model.setAttribute("role","dialog");
          model.setAttribute("aria-labelledby","exampleModalLabel");
          model.setAttribute("aria-hidden","true");
          let modelDialog= document.createElement("div");
          modelDialog.setAttribute("class","modal-dialog modal-dialog-centered modal-lg");
          modelDialog.setAttribute("role","document");
          let modelContent = document.createElement("div");
          modelContent.setAttribute("class","modal-content");
          //model header
          let modelHeader = document.createElement("div");
          modelHeader.setAttribute("class","modal-header bg-primary text-white");
          let modelTitle = document.createElement("h5");
          modelTitle.setAttribute("class","modal-title");
          modelTitle.setAttribute("id","exampleModalLabel-"+(i+1));
          modelTitle.innerHTML = "Table";
          let headerClose = document.createElement("button");
          headerClose.setAttribute("id","modelHeaderClose-"+(i+1))
          headerClose.setAttribute("type","button");
          headerClose.setAttribute("class","btn-close btn-close-white");
          headerClose.setAttribute("data-dismiss","modal");
          headerClose.setAttribute("aria-label","Close");
          //model body
          let modelBody = document.createElement("div");
          modelBody.setAttribute("class","modal-body");
          modelBody.setAttribute("id","modelBodyId-"+(i+1));
          //model footer
          let modelFooter = document.createElement("div");
          modelFooter.setAttribute("class","modal-footer");
          let closeButton = document.createElement("button");
          closeButton.setAttribute("id","modelFooterClose-"+(i+1));
          closeButton.setAttribute("type","button");
          closeButton.setAttribute("class","btn btn-secondary");
          closeButton.setAttribute("data-dismiss","modal");
          closeButton.innerHTML = "CLOSE SESSION (GENERATE BILL)";
          modelFooter.appendChild(closeButton);
          modelHeader.appendChild(modelTitle);
          modelHeader.appendChild(headerClose);
          modelContent.appendChild(modelHeader);
          modelContent.appendChild(modelBody);
          modelContent.appendChild(modelFooter);
          modelDialog.appendChild(modelContent);
          model.appendChild(modelDialog);
          document.body.appendChild(model);
      }
      
      //loading menu item details
      for(let i = 0; i < items.length;i++){
          let itemCard = document.createElement("div");
          let itemBody = document.createElement("div");
          let itemTitle = document.createElement("h5");
          let itemCost = document.createElement("h6");
          let itemCourseType = document.createElement("h6");
          if(i===items.length-1)
              itemCard.setAttribute("class","card mt-2 mb-2 menu");
          else
              itemCard.setAttribute("class","card mt-2 menu");
          itemCard.setAttribute("id","item-"+(i+1));    
          itemCard.setAttribute("draggable","true");       
          itemBody.setAttribute("class","card-body");
          itemTitle.setAttribute("class","card-title");
          itemCost.setAttribute("class","card-subtitle mb-2 text-muted pt-2");
          itemCourseType.setAttribute("class","card-subtitle mb-2 text-muted d-none");
          itemTitle.innerHTML = `${items[i].name}`;
          itemCost.innerHTML = `cost: ${items[i].cost}`;
          itemCourseType.innerHTML=`${items[i].course}`;
          itemBody.appendChild(itemTitle);
          itemBody.appendChild(itemCost);
          itemBody.appendChild(itemCourseType);
          itemCard.appendChild(itemBody);
          document.getElementById("menu-container").appendChild(itemCard);
          document.getElementById("item-"+(i+1)).addEventListener("dragstart",(event)=>{
              event.dataTransfer.setData("dropItem",event.target.id );
          });
      }
      // setting  model
     
  }
  
  
);
//search menu function
function searchMenu(){
  let allCards = document.getElementsByClassName("card menu");
  let searchText = document.getElementById("searchMenuName").value.toUpperCase();
  for(let index=0;index<allCards.length;index++){
      let item = allCards[index].children[0].children[0].innerHTML.toUpperCase();
      let course = allCards[index].children[0].children[2].innerHTML.toUpperCase();
      if(item.includes(searchText) || course.includes(searchText))
          allCards[index].style.display = "block";
      else
          allCards[index].style.display = "none";
  }   
}
//search table function
function searchTable(){
  let allCards = document.getElementsByClassName("card table");
  let searchText = document.getElementById("searchTableName").value.toUpperCase();
  
  for(let index=0;index<allCards.length;index++){
      let item = allCards[index].children[0].children[0].innerHTML.toUpperCase();
   
      if(item.includes(searchText))
          allCards[index].setAttribute("class","card mt-2 table"); 
      else
          allCards[index].setAttribute("class","card mt-2 table d-none");    
    
  }   
}
// model table details function
function tableDetails(table){
  document.getElementById("table-"+table.id).style.background="orange";
  document.getElementById("exampleModalLabel-"+(table.id)).innerHTML = table.name+"| Order Details";
  let modelBody = document.getElementById("modelBodyId-"+(table.id));
  if(modelBody.hasChildNodes()){
      modelBody.innerHTML=""
  }
  let displayTable = document.createElement("table");
  displayTable.setAttribute("class","table");
  let tableHead = document.createElement("thead");
  let tableRow = document.createElement("tr");
  let sno = document.createElement("th");
  sno.setAttribute("scope","col");
  sno.innerHTML="S.NO"
  let item = document.createElement("th");
  item.setAttribute("scope","col");
  item.innerHTML="Item"
  let price = document.createElement("th");
  price.setAttribute("scope","col");
  price.innerHTML="Price"
  let quantity = document.createElement("th");
  quantity.setAttribute("scope","col");
  quantity.innerHTML="Quantity";
  let remove = document.createElement("th");
  remove.setAttribute("scope","col");
  remove.innerHTML="Delete"
  tableRow.appendChild(sno);
  tableRow.appendChild(item);
  tableRow.appendChild(price);
  tableRow.appendChild(quantity);
  tableRow.appendChild(remove);
  tableHead.appendChild(tableRow);
  displayTable.appendChild(tableHead);
  let tableBody = document.createElement("tbody");
  for(let i = 0; i < table.orders.length;i++){
      let tableRow1 = document.createElement("tr");
      let td1 = document.createElement("th");
      td1.setAttribute("scope","row");
      td1.innerHTML = i+1;
      let td2 = document.createElement("td");
      td2.innerHTML=table.orders[i].name;
      let td3 = document.createElement("td");
      td3.innerHTML=table.orders[i].cost;
      let td4 = document.createElement("input");
      td4.setAttribute("id","table-"+(table.id)+" itemQuantity-"+(i+1));
      td4.setAttribute("type","number");
      td4.setAttribute("class","form-control form-control-sm my-2");
      td4.setAttribute("min","1");
      td4.setAttribute("value",table.orders[i].quantity);
      td4.setAttribute("placeholder",table.orders[i].quantity);
      let td5 = document.createElement("td");
      let deleteButton = document.createElement("button");
      deleteButton.setAttribute("type","button");
      deleteButton.setAttribute("class","btn btn-danger");
      deleteButton.innerHTML="Delete";
      td5.appendChild(deleteButton);
      tableRow1.appendChild(td1);
      tableRow1.appendChild(td2);
      tableRow1.appendChild(td3);
      tableRow1.appendChild(td4);
      tableRow1.appendChild(td5);
      tableBody.appendChild(tableRow1);
      td4.addEventListener("input",()=>{updateItemQuatity(table,i)});
      deleteButton.addEventListener("click",()=>{
          deleteOrder(table,i)
      });
    
  }
  let totalPrice = document.createElement("p");
  totalPrice.setAttribute("id","modalTotalPrice-"+(table.id));
  totalPrice.setAttribute("class","text-center");
  totalPrice.innerHTML=`Total Price: ${table.totalCost}`;
  displayTable.appendChild(tableBody);
  modelBody.appendChild(displayTable);
  modelBody.appendChild(totalPrice);
  $('#exampleModal-'+(table.id)).on('hide.bs.modal',()=>  {
      document.getElementById("table-"+table.id).style.background="white";
    })
  document.getElementById("modelHeaderClose-"+(table.id)).addEventListener("click",()=>{
      document.getElementById("table-"+table.id).style.background="white";
      }
  )
  document.getElementById("modelFooterClose-"+(table.id)).addEventListener("click",()=>{
      document.getElementById("table-"+table.id).style.background="white";
      table.orders = [];
      table.totalCost=0;
      table.totalItems=0;
      document.getElementById("table-"+table.id).children[0].children[1].innerHTML=`cost: ${table.totalCost} | total items: ${table.totalItems}`;
  })
  
}
// drag and drop function
function dragDrop(event){
  event.preventDefault();
  let tableIdName = this.id;
  let droppedItem = event.dataTransfer.getData("dropItem");
  let itemId = parseInt(droppedItem.substring(5));
  let tableId = parseInt(tableIdName.substring(6));
  let orderId;
  for(let i = 0;i<tables[tableId-1].orders.length;i++){
      let order = tables[tableId-1].orders[i];
      if(order.id===items[itemId-1].id){
          orderId = i;
          tables[tableId-1].orders[orderId].quantity+=1;
          break;
      }
  }
  if(isNaN(orderId)){
      
      let order = {
          id:items[itemId-1].id,
          name:items[itemId-1].name,
          cost:items[itemId-1].cost,
          course:items[itemId-1].course,
          quantity:1
      }
      tables[tableId-1].orders.push(order);
      
  }
  tables[tableId-1].totalCost=calculateTotalCost(tables[tableId-1]);
  tables[tableId-1].totalItems+=1;
  document.getElementById(tableIdName).children[0].children[1].innerHTML=`cost: ${tables[tableId-1].totalCost} | total items: ${tables[tableId-1].totalItems}`
}
//calculate total cost of table 
function calculateTotalCost(table){
  let totalCost = 0;
  for(let i = 0;i<table.orders.length;i++){
      totalCost+=(table.orders[i].cost)*(table.orders[i].quantity);
  }
  return totalCost;
}
//remove order item from table
function deleteOrder(table,index){
  table.totalItems -= table.orders[index].quantity;
  table.orders.splice(index,1);
  table.totalCost = calculateTotalCost(table);
  tableDetails(table);
  document.getElementById("modalTotalPrice-"+(table.id)).innerHTML = `Total Price: ${table.totalCost}`;
  document.getElementById("table-"+table.id).children[0].children[1].innerHTML=`cost: ${table.totalCost} | total items: ${table.totalItems}`;
}
function updateItemQuatity(table,index){
  let updateQuatity = parseInt(document.getElementById("table-"+(table.id)+" itemQuantity-"+(index+1)).value);
  table.orders[index].quantity = updateQuatity;
  table.totalItems = updatedTotalQuantity(table);
  table.totalCost=calculateTotalCost(table);
  document.getElementById("modalTotalPrice-"+(table.id)).innerHTML = `Total Price: ${table.totalCost}`;
  document.getElementById("table-"+table.id).children[0].children[1].innerHTML=`cost: ${table.totalCost} | total items: ${table.totalItems}`;
}
function updatedTotalQuantity(table){
  let totalItems = 0;
  for(let i = 0;i<table.orders.length;i++){
      totalItems+=table.orders[i].quantity;
  } 
  return totalItems;    
}