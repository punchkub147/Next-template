import _axios from 'axios';
import { useState, useEffect } from 'react';
import config from '../config';

export const api = async (url, option) => {
	const axios = _axios.create({
		baseURL: config.api,
	});
	return axios(url, {
		...option,
	});
};

export const useAPI = (url, option, initialLoad = true) => {
	const [data, setData] = useState(undefined);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(undefined);
	useEffect(() => {
		if (initialLoad) {
			load();
		}
		return;
	}, [url]);
	const load = async () => {
		setLoading(true);
		const { data } = await api(url, option);
		if (data) setData(data);
		if (error) setData(error);
		setLoading(false);
	};
	return { data, load, loading, error, url };
};
