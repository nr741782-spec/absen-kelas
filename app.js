function loadData() {
    let data = JSON.parse(localStorage.getItem("absensi")) || [];
    let tabel = document.getElementById("tabelAbsensi");

    tabel.innerHTML = `
        <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Status</th>
            <th>Waktu</th>
        </tr>
    `;

    data.forEach((item, index) => {
        tabel.innerHTML += `
            <tr>
                <td>${index + 1}</td>
                <td>${item.nama}</td>
                <td>${item.status}</td>
                <td>${item.waktu}</td>
            </tr>
        `;
    });
}

function kirimAbsen() {
    let nama = document.getElementById("nama").value;
    let status = document.getElementById("status").value;

    if (nama.trim() === "") {
        alert("Nama harus diisi!");
        return;
    }

    let waktu = new Date().toLocaleString("id-ID");

    let data = JSON.parse(localStorage.getItem("absensi")) || [];

    data.push({ nama, status, waktu });

    localStorage.setItem("absensi", JSON.stringify(data));

    alert("Absensi berhasil dikirim!");

    document.getElementById("nama").value = "";

    loadData();
}

loadData();
