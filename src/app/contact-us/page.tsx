
    export default function Contact() {
        return(

<div className="contact">
    <form className="form" >
       
            
            <label>
                <input
                    type="checkbox"
                    value="pepperoni"
                    // checked={toppings.includes("pepperoni")}
                    // onChange={handleToppingsChange}
                />
                Pepperoni
            </label>
            <label>
                <input
                    type="checkbox"
                    value="mushrooms"
                    // checked={toppings.includes("mushrooms")}
                    // onChange={handleToppingsChange}
                />
                Mushrooms
            </label>
            <label>
                <input
                    type="checkbox"
                    value="onions"
                    // checked={toppings.includes("onions")}
                    // onChange={handleToppingsChange}
                />
                Onions
            </label>
            <label>
                <input
                    type="checkbox"
                    value="bacon"
                    // checked={toppings.includes("bacon")}
                    // onChange={handleToppingsChange}
                />
                Bacon
            </label>
    

        <button type="submit">Place Order</button>
    </form>
   
    </div>

            
        )

        }