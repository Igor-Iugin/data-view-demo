import axios from 'axios'


export class OrganizationsService {
	private request = axios.create({
		baseURL: process.env.REACT_APP_BASE_URL,
	})
	public nextPage = null
	public prevPage = null

	async get() {
		const response = await this.request.get('/organizations', {
			responseType: 'json',
			transformResponse: data => JSON.parse(data)
		})
		this.nextPage = response.data.next
		this.prevPage = response.data.prev

		return response.data.results
	}
}