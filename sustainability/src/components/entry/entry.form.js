import React, { useState, useContext } from "react";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { UserContext } from "../../contexts/user.context";

import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import useOnclickOutside from "react-cool-onclickoutside";

export default function EntryForm() {
    // const history = useHistory();
    const user = useContext(UserContext);
    const [hours, setHours] = useState("");
    const [bags, setBags] = useState("");

    function onSubmit(e) {
        e.preventDefault();

        axios.post("/api/entry/", {
            location: value,
            hours: hours,
            bags: bags,
        }, { withCredentials: true })
            .then(res => {
                if (res.status === 200) {
                    user.setReload(!user.reload);

                    setValue("");
                    setHours("");
                    setBags("");
                }
            })
            .catch(err => {
                console.log(err);
            });
    }

    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const ref = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
    });

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                console.log("📍 Coordinates: ", { lat, lng });
            })
            .catch((error) => {
                console.log("😱 Error: ", error);
            });
    };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                place_id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <button key={place_id} className="dropdown-item" onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </button>
            );
        });

    return (
        <form className="form" onSubmit={onSubmit}>
            <Row>
                <Col md={6}>
                    <div className="form-group">
                        <div ref={ref}>
                            <input
                                value={value}
                                onChange={handleInput}
                                disabled={!ready}
                                placeholder="Location"
                                className="form-control"
                            />
                            {status === "OK" && renderSuggestions()}
                        </div>
                    </div>
                </Col>
                <Col md={2}>
                    <div className="form-group">
                        <input
                            placeholder="Hours"
                            type="number"
                            step="0.1"
                            min="0"
                            required
                            className="form-control"
                            value={hours}
                            onChange={e => setHours(e.target.value)}
                        />
                    </div>
                </Col>
                <Col md={2}>
                    <div className="form-group">
                        <input
                            placeholder="Bags"
                            type="number"
                            step="0.1"
                            min="0"
                            required
                            className="form-control"
                            value={bags}
                            onChange={e => setBags(e.target.value)}
                        />
                    </div>
                </Col>
                <Col md={2}>
                    <div className="form-group">
                        <input type="submit" value="Add Entry" className="btn btn-success" />
                    </div>
                </Col>
            </Row>
        </form>
    );
}