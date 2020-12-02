import { useBusinesses } from "./BusinessProvider.js"

import { Business } from "./Business.js"

const contentTarget = document.querySelector(".businesses")

export const BusinessList = () => {
    const allTheBusinesses = useBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    allTheBusinesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}
