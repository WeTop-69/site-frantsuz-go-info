import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
import { ref, onValue, getDatabase, connectDatabaseEmulator, get, child } from 'firebase/database';
  
function PDFFile(timeDate, timeDate2, carP) {
    let btnInfo1 = []
    const dbRef1 = ref(getDatabase());
    get(child(dbRef1, `trips/completed`)).then((snapshot) => {
        if (carP == 'Выберете машину'){
            if (isNaN(timeDate) == true && isNaN(timeDate2) == true){
                btnInfo1 = Object.values(snapshot.val());
            } else {
                if (isNaN(timeDate) == true){
                    timeDate = 1640984400000
                    let btnInfo2 = Object.values(snapshot.val());
                    btnInfo1 = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
                } else {
                    if (isNaN(timeDate2) == true){
                        timeDate2 = 33545048460000
                        let btnInfo2 = Object.values(snapshot.val());
                        btnInfo1 = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
                    } else {
                        let btnInfo2 = Object.values(snapshot.val());
                        btnInfo1 = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
                    }
                }
            }
        } else{
            if (isNaN(timeDate) == true && isNaN(timeDate2) == true){
                let btnInfo2 = Object.values(snapshot.val());
                btnInfo1 = btnInfo2.filter((her444) => her444.carNumber == carP)
            } else {
                if (isNaN(timeDate) == true){        
                    timeDate = 1640984400000
                    let btnInfo2 = Object.values(snapshot.val());
                    let btnInfo3  = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
                    btnInfo3 = btnInfo3.filter((her444) => her444.carNumber == carP)
                } else {
                    if (isNaN(timeDate2) == true){
                        timeDate2 = 33545048460000
                        let btnInfo2 = Object.values(snapshot.val());
                        let btnInfo3 = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
                        btnInfo1 = btnInfo3.filter((her444) => her444.carNumber == carP)
                    } else {
                        let btnInfo2 = Object.values(snapshot.val());
                        let btnInfo3 = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
                        btnInfo1 = btnInfo3.filter((her444) => her444.carNumber == carP)
                    }
                }
            }
            let btnInfo2 = Object.values(snapshot.val());
            let btnInfo3 = btnInfo2.filter((her443) => timeDate <= her443.date && her443.date <= timeDate2)
            btnInfo1 = btnInfo3.filter((her444) => her444.carNumber == carP)
        }
      })
      let priseCar
      setTimeout(() => {
      let priseCar2 = btnInfo1.map((her445) => {
        return her445.price
      })
      priseCar = priseCar2.reduce(function(sum, current) {
        return sum + current;
      }, 0);
        }, 1000);
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
                text: 'от:'+ new Date(timeDate),
                fontSize: 12,
                bold: false,
                margin: [15, 0,0,0]
            },
            {
                text:"до:"+ new Date(timeDate2),
                fontSize: 12,
                bold: false,
                margin: [15, 20,0, 10]
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
            },
            {
                text:"Итог:"+ priseCar,
                fontSize: 12,
                bold: false,
                margin: [15, 20,0, 10]
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