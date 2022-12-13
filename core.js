fetch('https://house-stock-watcher-data.s3-us-west-2.amazonaws.com/data/all_transactions.json')
    .then(function (response) {
        return response.json();
    })
    // .then((data) => console.log(data))
    .then(function(data) {
        console.log(data);
        var table = document.querySelector('table');

        data.map((dataObject) => {
            const addRow = document.createElement('tr');
            const tdDisclosureYear = document.createElement('td');
            const tdDisclosureDate = document.createElement('td');
            const tdTransactionDate = document.createElement('td');
            const tdOwner = document.createElement('td');
            const tdTicker = document.createElement('td');

            tdDisclosureYear.innerText = dataObject.disclosure_year;
            tdDisclosureDate.innerText = dataObject.disclosure_date;
            tdTransactionDate.innerText = dataObject.transaction_date;
            tdOwner.innerText = dataObject.owner;
            tdTicker.innerText = dataObject.ticker;

            addRow.appendChild(tdDisclosureYear);
            addRow.appendChild(tdDisclosureDate);
            addRow.appendChild(tdTransactionDate);
            addRow.appendChild(tdOwner);
            addRow.appendChild(tdTicker);
            table.appendChild(addRow);
        })
    });



