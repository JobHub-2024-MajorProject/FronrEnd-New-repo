import axios from 'axios';

const ApiService = {
  /**
   * Fetch data from the backend
   * @param {string} url - The API endpoint to fetch data from
   * @returns {Promise<Object|null>} - The fetched data or null if an error occurs
   */
  fetchData: async function (url) {
    try {
      const response = await axios.get(url);
      return response.data; // Return fetched data
    } catch (error) {
      console.error('Error fetching data:', error);
      return null;
    }
  },

  /**
   * Submit data to the backend
   * @param {string} url - The API endpoint to submit data to
   * @param {Object} data - The data to be submitted
   * @returns {Promise<Object|null>} - The response data or null if an error occurs
   */
  submitData: async function (url, data) {
    try {
      const response = await axios.post(url, data, {
        headers: { 'Content-Type': 'application/json' },
      });
      return response.data; // Return response from server
    } catch (error) {
      console.error('Error submitting data:', error);
      return null;
    }
  },
};

export default ApiService;