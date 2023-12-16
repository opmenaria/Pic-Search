import { Input } from "antd";
import React, { useEffect, useRef, useState } from "react";
import { SearchResult } from "semantic-ui-react";
import { SearchOutlined } from '@ant-design/icons';
function SearchBar(props) {
    const infRef = useRef()
    const [term, setTerm] = useState('')

    const onFormSubmit = (event) => {
        event.preventDefault();
        props.onSubmit(term);
        infRef.current.focus()
    }
    useEffect(() => {
        infRef.current.focus()
    }, [])
    return (
        <div className="ui segment">
            <form onSubmit={(e) => onFormSubmit(e)} className="ui form">
                <div className="field">
                    <label htmlFor="">Image Search</label>
                    <Input bordered={false} suffix={<SearchOutlined size={14} />} ref={infRef} type='text' value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;