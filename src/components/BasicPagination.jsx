import {Stack} from "@mui/material";
import Pagination from '@mui/material/Pagination';
import {useEffect, useState} from "react";
import {foundations, local, organizations} from "./OrganizationsContent.jsx";

export default function BasicPagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const [currentTab, setCurrentTab] = useState(1);
    const [maxItemsPerPage] = useState(3);
    const [items, setItems] = useState(foundations);

    const handlePageChange = (e, page) => {
        setCurrentPage(page)
    }
    const handleTabChange = (tabId) => {
        setCurrentTab(tabId);
    };

    useEffect(() => {
        if (currentTab === 1) {
            setItems(foundations);
        } else if (currentTab === 2) {
            setItems(organizations);
        } else if (currentTab === 3){
            setItems(local);
        }
        setCurrentPage(1)
    }, [currentTab]);

    return (
        <section id='organizations'>
            <h3>Komu pomagamy</h3>
            <img src="/src/assets/Decoration.svg" alt="decoration"/>
            <div className='org-select'>
                <p onClick={() => handleTabChange(1)}>Fundacjom</p>
                <p onClick={() => handleTabChange(2)}>Organizacjom pozarządowym</p>
                <p onClick={() => handleTabChange(3)}>Lokalnym zbiórkom</p>
            </div>
            <div className='org-box-wrapper'>
                {currentTab === 1 ? (
                    <p>W naszej bazie znajdziesz listę zweryfikowanych Fundacji, z którymi współpracujemy. Możesz
                        sprawdzić czym się zajmują, komu pomagają i czego potrzebują.</p>) : ''}
                {currentTab === 2 ? (
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                    </p>
                ) : ''}
                {currentTab === 3 ? (<p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.
                </p>) : ''}
                <div className='org-list'>
                    {items
                        .slice(
                            currentPage * maxItemsPerPage - maxItemsPerPage,
                            currentPage * maxItemsPerPage
                        )
                        .map((item) => {
                            return (
                                <div key={item.id} className='org-item'>
                                    <p>{item.name}<br/> <span>{item.goal}</span></p>
                                    <p>{item.needs}</p>
                                </div>
                            )
                        })
                    }
                </div>
                {items.length > 3 ? (
                    <Stack spacing={2}>
                        <Pagination count={Math.ceil(items.length / maxItemsPerPage)}
                                    variant="outlined"
                                    shape="rounded"
                                    onChange={handlePageChange}
                        />
                    </Stack>) : ''
                }
            </div>
        </section>
    );
}

 