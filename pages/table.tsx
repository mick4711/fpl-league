import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { ReactGrid, Column, Row, HeaderCell } from '@silevis/reactgrid'
import '@silevis/reactgrid/styles.css'

export default function Table() {
    interface Person {
        name: string;
        surname: string;
    }

    const getPeople = (): Person[] => [
        { name: "Thomas", surname: "Goldman" },
        { name: "Susie", surname: "Quattro" },
        { name: "", surname: "" }
    ]
    
    const getColumns = (): Column[] => [
        { columnId: "name", width: 150 },
        { columnId: "surname", width: 150 }
    ]

    const headerRow: Row<HeaderCell> = {
        rowId: "header",
        cells: [
          { type: "header", text: "Name" },
          { type: "header", text: "Surname" }
        ]
    }

    const getRows = (persons: Person[]): Row[] => [
        headerRow,
        ...persons.map<Row>((person, idx) => ({
          rowId: idx,
          cells: [
            { type: "text", text: person.name },
            { type: "text", text: person.surname }
          ]
        }))
    ]

    const [people] = React.useState<Person[]>(getPeople());
  
    const rows = getRows(people);
    const columns = getColumns();
  
    return <div>
        <Head>
            <title>FPL Table</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Link href='/'>Home</Link>

        <ReactGrid rows={rows} columns={columns} />
    </div>
}
