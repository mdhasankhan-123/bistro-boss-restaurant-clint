import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import Cover from "../../../Component/Cover/Cover"
import orderCover from '../../../assets/shop/banner2.jpg'
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../Hooks/useMenu";
import OrderCard from "../../../Component/OrderCard/OrderCard";
import { useParams } from "react-router-dom";
import { useState } from "react";
// import Pagination from "../../../Component/Pagination/Pagination";



const Order = () => {
    const [menu] = useMenu();
    const {category} = useParams();
    const categories = ['Salad', 'Pizza', 'Soups', 'Desserts', 'Drinks']
    const initialTabIndex = categories.indexOf(category)
    const [index, setIndex] = useState(initialTabIndex);
    const dessert = menu.filter(item => item.category === 'dessert')
    const pizzas = menu.filter(item => item.category === 'pizza')
    const salad = menu.filter(item => item.category === 'salad')
    const soup = menu.filter(item => item.category === 'soup')
    const drinks = menu.filter(item => item.category === 'drinks')

    
    return (
        <div>
            <div>
                <Cover img={orderCover} title={'Order'}></Cover>
            </div>
            <div className="my-24 max-w-screen-lg mx-auto">
                <Tabs defaultIndex={index} onSelect={(index) => setIndex(index)}>
                    <TabList className={'border-0 flex gap-5 mx-auto mb-12 justify-center'}>
                        <Tab className={'text-2xl cursor-pointer font-medium'} selectedClassName="text-[#BB8506] border-b-4 border-b-[#BB8506] pb-2">Salad</Tab>

                        <Tab className={'text-2xl cursor-pointer font-medium'} selectedClassName="text-[#BB8506] border-b-4 border-b-[#BB8506] pb-2">Pizza</Tab>

                        <Tab className={'text-2xl cursor-pointer font-medium'} selectedClassName="text-[#BB8506] border-b-4 border-b-[#BB8506] pb-2">Soups</Tab>

                        <Tab className={'text-2xl cursor-pointer font-medium'} selectedClassName="text-[#BB8506] border-b-4 border-b-[#BB8506] pb-2">Desserts</Tab>

                        <Tab  className={'text-2xl cursor-pointer font-medium'}selectedClassName="text-[#BB8506] border-b-4 border-b-[#BB8506] pb-2">Drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                salad.map(orderInfo => <OrderCard key={orderInfo._id} orderInfo={orderInfo}></OrderCard>)
                            }
                        </div>
                        {/* <div>
                            <Pagination setProducts={setProducts} totalProducts={salad.length}></Pagination>
                        </div> */}
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                pizzas.map(orderInfo => <OrderCard key={orderInfo
                                    ._id} orderInfo={orderInfo}></OrderCard>)
                            }
                        </div>

                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                soup.map(orderInfo => <OrderCard key={orderInfo
                                    ._id} orderInfo={orderInfo}></OrderCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                dessert.map(orderInfo => <OrderCard key={orderInfo
                                    ._id} orderInfo={orderInfo}></OrderCard>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="grid grid-cols-3 gap-5">
                            {
                                drinks.map(orderInfo => <OrderCard key={orderInfo
                                    ._id} orderInfo={orderInfo}></OrderCard>)
                            }
                        </div>
                    </TabPanel>

                </Tabs>
            </div>
        </div>

    );
};

export default Order;