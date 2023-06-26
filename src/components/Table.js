import { Fragment } from 'react';


function Table({ data, config, keyFn }) {


    const renderedHeaders = config.map((column) => {
        if (column.header) {
            return <Fragment key={column.label}>{column.header()}</Fragment>;
        }

        return <th key={column.label}>{column.label}</th>
    });

    //below we have introduced 'nested mapping' - a mapping function within a mapping function. 

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((column) => {
            return <td className="p-2"key={column.label}>{column.render(rowData)}</td>;
        });
        return (
            <tr key={rowData.name} className="border-b">
                {renderedCells}
            </tr>
        )
    });
        return (
            <table className="table-auto border-spacing-2">
                <thead>
                    <tr className="border-b-2">
                        {renderedHeaders}
                    </tr>
                </thead>
                <tbody>{renderedRows}</tbody>
            </table>
        );
    }

export default Table;