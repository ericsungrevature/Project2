import React, {useState} from "react";
import Data from './Data';

const Search = () => {
    const [search, setSearch] = useState("");

    function onChangeHandler(e:any){
        setSearch(e.target.value);
    }
    return(
        <section className="py-4 container">
            <div className="row justify-content-center">

            <div className="col-12 mb-5">
                <div className="mb-3 col-4 mx-auto text-center">
                    <label className="form-label h4">Search by Name or Tag</label>
                    <div className="input-group">
                        <input type="search" className="form-control rounded" placeholder="Search" value={search} onChange={onChangeHandler} />
                        <button type="button" className="btn btn-outline-primary">Search</button>
                    </div>
                </div>
            </div>

                {Data.cardData.filter((val) => {
                    if(search === ""){
                        return val
                    } else if(val.tags.includes(search.toLocaleLowerCase())){
                        return val
                    } else if(val.name.toLowerCase().includes(search.toLowerCase())){
                        return val
                    }
                })
                .map((item, index) =>{
                    return(
                        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                            <div className="card p-0 overflow-hidden h-100 shadow">
                                <img src={item.img} className="card-img-top"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <p className="card-text">{item.description}</p>
                                    <p className="card-tag">{item.tags}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
export default Search;