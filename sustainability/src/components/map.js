import { useState, useRef, useCallback, useEffect } from "react";
import ReactMapGL, { FullscreenControl, GeolocateControl, NavigationControl, Marker } from "react-map-gl";
import Pin from "./pin";
import axios from "axios";

export default function Map() {
	const [viewport, setViewport] = useState({
		latitude: 38.8298,
		longitude: -77.3074,
		zoom: 8
	});

	const [marker, setMarker] = useState([]);
	const mapRef = useRef();

	const handleViewportChange = useCallback(
		(newViewport) => setViewport(newViewport),
		[]
	);

	const handleGeocoderViewportChange = useCallback(
		(newViewport) => {
			const geocoderDefaultOverrides = { transitionDuration: 1000 };

			return handleViewportChange({
				...newViewport,
				...geocoderDefaultOverrides
			});
		},
		[handleViewportChange]
	);

	useEffect(() => {
		axios.get("/api/entry", { withCredentials: true })
			.then(res => {
				if (res.status === 200) {
					console.log(res.data);
					setMarker(res.data?.map((e) =>
						<Marker key={e.createdAt} latitude={e.latitude} longitude={e.longitude}>
							<Pin size={10} />
						</Marker>
					));
				}
			})
			.catch(err => {
				console.log(err);
			});
	}, []);

	return (
		<div style={{ height: "80vh" }}>
			<ReactMapGL
				{...viewport}
				ref={mapRef}
				width="100%"
				height="100%"
				mapStyle="mapbox://styles/mapbox/light-v9"
				onViewportChange={handleViewportChange}
				mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_ACCESS_TOKEN}
			>
				<FullscreenControl />
				<NavigationControl />
				<GeolocateControl
					positionOptions={{ enableHighAccuracy: true }}
					trackUserLocation={true}
				/>
				{marker}
			</ReactMapGL>
		</div>
	);
}