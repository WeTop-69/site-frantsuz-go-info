import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { ref, onValue, getDatabase, connectDatabaseEmulator, get, child } from 'firebase/database';
  
function PDFFile(infocar) {
    let btnInfo1 = []
    const dbRef1 = ref(getDatabase());
    get(child(dbRef1, `trips/completed`)).then((snapshot) => {
        btnInfo1 = Object.values(snapshot.val());
      })

    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    setTimeout(() => {
        const her = btnInfo1.map((btnInfo) => {
            return [btnInfo.carNumber, 'Имя водителя', btnInfo.address,String(new Date(btnInfo.date)), btnInfo.price]
        })
        const repotrTitle = [
            {
                text: 'История заказов',
                fontSize: 15,
                bold: true,
                margin: [15, 20,0, 45]
            },
            {
                fontSize: 10,
                table: {
                    widths: ['*','*','*','*','*'],
                    body: [
                        ['Номер машины', 'Имя водителя', 'Адрес','Дата/Время', 'Цена'],
                        ...her
                    ]
                }
            }
    
        ];
    
        const detalis = [
          
        ];
    
        const rodape = [];
    
        const docDef = {
            pageSize: 'A4',
            pageMargins: '15, 50, 15, 40',
    
            header: [repotrTitle],
            content: [detalis],
            footer: [rodape]
        }
    
        pdfMake.createPdf(docDef).download();
    }, 2000);
  }

  export default PDFFile;