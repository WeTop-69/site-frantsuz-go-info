import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
  
function PDFFile(infocar) {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;

    const repotrTitle = [];

    const detalis = [];

    const rodape = [];

    const docDef = {
        pageSize: 'A4',
        pageMargins: '15, 50, 15, 40',

        header: [repotrTitle],
        content: [detalis],
        footer: [rodape]
    }

    pdfMake.createPdf(docDef).download();
  }

  export default PDFFile;