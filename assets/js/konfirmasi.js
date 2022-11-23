function hapusMenu(url) {

    Swal.fire({
        title: 'Are you sure?',
              text: "Yakin ingin hapus menu?",
              icon: 'warning',
              showCancelButton: true,
              confrimButtonColor: '#3885d5',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}
function hapusRole(url) {

    Swal.fire({
        title: 'Are you sure?',
              text: "Yakin ingin hapus menu?",
              icon: 'warning',
              showCancelButton: true,
              confrimButtonColor: '#3885d5',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}
function hapuSubMenu(url) {
    
    Swal.fire({
        title: 'Are you sure?',
              text: "Yakin ingin hapus menu?",
              icon: 'warning',
              showCancelButton: true,
              confrimButtonColor: '#3885d5',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Ya, hapus!'
    }).then((result) => {
        if (result.value) {
            document.location.href = url;
        }
    })
}