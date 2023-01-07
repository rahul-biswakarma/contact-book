// JS file

window.onload = async function () {
  var contacts = await fetchContacts();
  var contactsList = document.getElementById("contact-container");
  contactsList.innerHTML = "";
  contactsList.innerHTML += contacts
    .map(
      (contact) => `
    <div class="border-2 border-[#e9e9e9] rounded-md p-[1rem] flex-[1_0_max(200px,100%/4)] transition-all bg-[#f6f6f6] hover:bg-[#ebebeb] hover:border-[#d7d7d7]">
        <h2 class="text-gray-500 font-bold">Name: <span class="text-black font-bold pl-[3px]">${contact.name}</span></h2>
        <div class="text-gray-500 font-bold">Email: <span class="text-black pl-[3px]">${contact.email}</span></div>
        <div class="text-gray-500 font-bold">Phone: <span class="text-black pl-[3px]">${contact.phone}</span></div>
        <div class="text-gray-500 font-bold">Website: <span class="text-black pl-[3px]">${contact.website}</span></div>
        <div class="text-gray-500 font-bold">Company: <span class="text-black pl-[3px]">${contact.company.name}</span></div>
        <div class="text-gray-500 font-bold">City: <span class="text-black pl-[3px]">${contact.address.city}</span></div>
        <div class="text-gray-500 font-bold">Zipcode: <span class="text-black pl-[3px]">${contact.address.zipcode}</span></div>
    </div>`
    )
    .join("");
};

function fetchContacts() {
  return new Promise((resolve, reject) => {
    try {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((data) => {
          if (data) resolve(data.json());
          reject("No data");
        })
        .catch((error) => {
          console.log("Promise Rejected Error: " + error);
          reject(error);
        });
    } catch (error) {
      console.log("Promise Rejected Error: " + error);
      reject(error);
    }
  });
}
