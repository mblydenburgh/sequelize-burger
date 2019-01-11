document.addEventListener('DOMContentLoaded',function(event){
    console.log(`document loaded`);
    const eatButtons = document.querySelectorAll('.eat-button');
    const deleteButtons = document.querySelectorAll('.delete-button');
    const customerInputs = document.querySelectorAll('.customer-input');
    let eatingCustomer;

    eatButtons.forEach(button=>{
        button.addEventListener('click',event=>{
            console.log(event.target.dataset.id);
            
            const id = event.target.dataset.id;
            eatingCustomer =  customerInputs[id-1];
            customerName = eatingCustomer.value;
            const data = {
                eaten:true,
                name:customerName
            };
            console.log(customerName);
            console.log(`fetching from id ${id}`);
            fetch(`/api/${id}`,{
                method:'PUT',
                body: JSON.stringify(data),
                headers:{'Content-Type':'application/json'}
            })
            .then(res=>{
                console.log(`in response`);
                console.log(res)
                location.reload();
            })
            .catch(err=>{
                console.log(`in catch`);
                console.log(err)
            });
        })
    });

    deleteButtons.forEach(button=>{
        button.addEventListener('click',event=>{
            const id = event.target.dataset.id;
            fetch(`/api/${id}`,{
                method:'DELETE'
            })
            .then(res=>{
                console.log(`in response`);
                console.log(res);
                location.reload();
            })
            .catch(err=>{
                console.log(`in catch`);
                console.log(err);
            })
        })
    })

});