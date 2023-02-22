
function download(){
    const item= document.querySelector(".todo")

    var opt= {
        margin: 1,
        filename: 'myFileName.pdf',
        html2canvas: {scale: 2},
        jsPDF: { unit: "in",format: "letter", orientation: "portrait"},
    };
    html2pdf().set(opt).from(item).save()
}