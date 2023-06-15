import Accordion from '../components/Accordion';

function AccordionPage() {
    const items = [
        {
            id: 'fjhf',
            label: 'Can I use React on a Project?',
            content: 'You can use React on any project you want'
        },
        {
            id: 'fkfcc',
            label: 'Can I use JavaScript on a Project?',
            content: 'You can use JavaScript on any project you want'
        },
        {
            id: 'acsgf',
            label: 'Can I use TypeScript on a Project?',
            content: 'You can use TypeScript on any project you want'
        }
    ];

    return <Accordion items={items} />;
}

export default AccordionPage;
