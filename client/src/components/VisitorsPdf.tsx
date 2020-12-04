import React from "react";
import { Household, Visit } from "../type";
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import {Table,TableHeader,TableCell,TableBody,DataTableCell } from "@david.kucsai/react-pdf-table"


interface Props {
    visits: Visit[];
}

// Create styles
const styles = StyleSheet.create({
    page: {
      flexDirection: 'row',
      backgroundColor: '#fff'
    },
    section: {
      margin: 10,
      padding: 10,
      flexGrow: 1
    }
  });


const VisitorsPdf:React.FC<Props> = (props:Props)=>{
    const {visits} = props;
    return  <Document>
    <Page size="A4" style={styles.page}>
    
    <View style={{ color: 'black', textAlign: 'center', marginLeft: 30,marginTop: 30, width:"530px", }}>
    <Text style={{margin:"10px"}}>
        Gästeliste
            </Text>
    <Table
                data={visits.flatMap(v => v.households)}
            >
                <TableHeader>
                    <TableCell style={{padding:"5px"}}>
                        Vorname
                    </TableCell >
                    <TableCell style={{padding:"5px"}}>
                        Nachname
                    </TableCell>
                    <TableCell style={{padding:"5px"}}>
                        Telefon
                    </TableCell>
                    <TableCell style={{padding:"5px"}}>
                        Gäste
                    </TableCell>
                </TableHeader>
                <TableBody>
                    <DataTableCell  style={{padding:"5px"}} getContent={(h:Household) => h.firstName}/>
                    <DataTableCell style={{padding:"5px"}} getContent={(h:Household) => h.lastName}/>
                    <DataTableCell style={{padding:"5px"}} getContent={(h:Household) => h.phone}/>
                    <DataTableCell style={{padding:"5px"}} getContent={(h:Household) => h.guestsCount}/>
                </TableBody>
            </Table>
  </View>
    </Page>
  </Document>
}

const renderRow =(h:Household)=>{
    return <Text>{h.firstName}{h.lastName}{h.phone} {h.guestsCount}</Text>
}
export default VisitorsPdf;