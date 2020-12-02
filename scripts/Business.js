export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__name">${businessObject.companyName}</h2>
            <div class="business__address">
                <div class="address__streetAddress">${businessObject.addressFullStreet}</div>
                <div class="address__city">${businessObject.addressCity},</div>
                <div class="address__state">${businessObject.addressStateCode}</div>
                <div class="address__zip">${businessObject.addressZipCode}</div>
            </div>
        </section>
    `
}