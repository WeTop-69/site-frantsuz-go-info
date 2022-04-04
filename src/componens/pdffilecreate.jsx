import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { ref, onValue, getDatabase, connectDatabaseEmulator, get, child } from 'firebase/database';
  
function PDFFile(timeDate, timeDate2) {
    let btnInfo1 = []
    const dbRef1 = ref(getDatabase());
    get(child(dbRef1, `trips/completed`)).then((snapshot) => {
        let btnInfo2 = Object.values(snapshot.val());
        btnInfo1 = btnInfo2.filter((her443) => timeDate < her443.date && her443.date < timeDate2)
        console.log(timeDate)
        console.log(timeDate2)
        console.log(btnInfo1)
      })
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
    setTimeout(() => {
        const her = btnInfo1.map((btnInfo) => {
            return [btnInfo.carNumber, btnInfo.driverName, btnInfo.address,String(new Date(btnInfo.date)), btnInfo.price]
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