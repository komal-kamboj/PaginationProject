
const pagination = document.getElementById('pagination')
const page = document.getElementById("page")

let pageNum = 0
let pageItems = 10

GetItems()
function GetItems() {
    page.innerHTML = `
        <div class="page-header cf">
            <h2 style="color:gray;">CONTACTS</h2> 
            <h3 style="color:black; font-weight:normal;">Total: ${users.length}</h3>
        </div>`;

    for (let i = pageNum * pageItems; i < (pageNum * pageItems) + pageItems; i++) {

        const myItem = document.createElement('ul');
        myItem.setAttribute("class", "contact-list")
        myItem.innerHTML += `
                  <li class="contact-myItem cf">
              <div id="contact-details">
                  <img id="avatar" src="${users[i].image}" alt="">
                  <h3>${users[i].name}</h3>
                  <h3 style="color:gray; font-size:15px; font-weight:normal;">${users[i].email}</h3>
                 
              </div>
              <div id="joined-details">
                  <span id="date" style="color:gray;">Joined&nbsp${users[i].joined}</span>
              </div>
          </li>`;
        page.append(myItem);
    }
    GetPageNum()
}
function GetPageNum() {
    pagination.innerHTML = "";
    for (let i = 0; i <= (users.length / pageItems); i++) {

        const list = document.createElement('li');


        list.innerHTML = `<a>${i}</a>`;
        list.addEventListener('click', (event) => {

            pageNum = event.target.innerHTML;

            GetItems();
        });

        pagination.append(list);


    }
    page.append(pagination)



}