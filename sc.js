document.addEventListener('DOMContentLoaded', function () {
    const searchForm = document.getElementById('searchForm');
    const searchResults = document.getElementById('searchresults');
    const tableBody = document.getElementById('reset');
    const searcheading = document.getElementById('searchs');


    searchForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const searchString = document.getElementById('searchString').value;
        const apiUrl = `https://smswiki-2024-default-rtdb.asia-southeast1.firebasedatabase.app/${searchString}.json`;

        if (searchString.toLowerCase().includes('government')) {
            showGovernmentMessage();
            return;
        }

        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const pdata = {
                    'cin': data.cin,
                    'name': data.name === undefined ? data['company'] : data['name'],
                    'coc': data['coc'],
                    'category': data['category'],
                    'status': data['status'],
                    'state': data['state'],
                    'aoi': data['aoi']
                };

                if (searchString.toLowerCase().includes('cin not mapped') || searchString.toLowerCase().includes('unregistered')) {
                    updateTableForUnregistered(pdata);
                } else {
                    updateTable(pdata);
                }
                searcheading.innerHTML = `Searching Results for ${searchString}`
                searchResults.style.display = 'block';
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                alert('Failed to fetch data. Please try again later.');
            });
    });

    function showGovernmentMessage() {
        searcheading.innerHTML = `Searching Results for ${searchString}`

        searchResults.style.display = 'block';
        tableBody.innerHTML = `
            <tr>
                <td colspan="2"><strong>Government</strong></td>
            </tr>
        `;
    }

    function updateTableForUnregistered(pdata) {
        tableBody.innerHTML = `
            <tr>
                <td><strong>CIN</strong></td>
                <td>CIN Not Mapped</td>
            </tr>
            <tr>
                <td><strong>Company Name</strong></td>
                <td>${pdata.name}</td>
            </tr>
        `;
    }

    function updateTable(pdata) {
        let tableContent = `
            <tr>
                <td><strong>CIN</strong></td>
                <td>${pdata.cin}</td>
            </tr>
            <tr>
                <td><strong>Company Name</strong></td>
                <td>${pdata.name}</td>
            </tr>
        `;

        if (pdata.category) {
            tableContent += `
                <tr>
                    <td><strong>Category</strong></td>
                    <td>${pdata.category}</td>
                </tr>
            `;
        }

        if (pdata.coc) {
            tableContent += `
                <tr>
                    <td><strong>Class of Company</strong></td>
                    <td>${pdata.coc}</td>
                </tr>
            `;
        }

        if (pdata.status) {
            tableContent += `
                <tr>
                    <td><strong>Status</strong></td>
                    <td>${pdata.status}</td>
                </tr>
            `;
        }

        if (pdata.state) {
            tableContent += `
                <tr>
                    <td><strong>State</strong></td>
                    <td>${pdata.state}</td>
                </tr>
            `;
        }

        if (pdata.aoi) {
            tableContent += `
                <tr>
                    <td><strong>Age of Incorporation</strong></td>
                    <td>${pdata.aoi}</td>
                </tr>
            `;
        }

        tableBody.innerHTML = tableContent;
    }
});
