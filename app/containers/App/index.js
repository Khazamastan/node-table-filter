/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

// Import all the third party stuff
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import Table from 'components/Table';
import Pagination from 'components/Pagination';
import Input from 'components/Input';
import Select from 'components/Select';
import _ from 'lodash';
import Dropzone from 'react-dropzone';
import AppWrapper, { UploadWrapper, FilterContainer, ErrorMessage } from './AppWrapper';
import GlobalStyle from '../../global-styles';

export default class App extends Component {
  headers = {
    number: {
      name: 'S/NO',
      width: 5,
    },
    name: {
      name: 'Name',
      width: 20,
    },
    address: {
      name: 'Address',
      width: 20,
    },
    city: {
      name: 'City',
      width: 30,
    },
    country: {
      name: 'County',
      width: 20,
    },
    pincode: {
      name: 'Pincode',
      width: 20,
    },
  };

  PER_PAGE = 50;

  pageCounts = [10, 20, 50, 100];

  constructor(props, context) {
    super(props, context);
    this.state = {
      loading: false,
      query: '',
      delimiter: ',',
      perPage: 2,
      data: [],
      filteredData: [],
    };
  }

  /* filter the items based on search query */
  onChangeQuery = e => {
    const { data } = this.state;
    const query = e.target.value;
    this.filterItems(data, query);
  };
  /* 
    debounce your search so that it will search only when user stops typing for 300ms;
    @param contacts 
    @param query
  */

  filterItems = _.debounce(function(data, query) {
    console.log(query);
    query = query.toLowerCase();
    const filteredData = data.filter(user => {
      const exists = Object.keys(user).some(field => {
        const fieldValue = user[field];
        if (
          fieldValue &&
          fieldValue != null &&
          fieldValue
            .toString()
            .toLowerCase()
            .indexOf(query) > -1
        ) {
          return true;
        }
      });
      if (exists) {
        return true;
      }
    });
    debugger;
    this.setState({ filteredData });
  }, 300);

  /* change no of items page */
  onChangePerPageCount = e => {
    let index = e.nativeEvent.target.value;
    if (!index) {
      index = 2;
    }
    const perPage = parseInt(index);
    this.setState({ perPage });
  };

  onDrop = acceptedFiles => {
    console.log(acceptedFiles);
    const formData = new FormData();
    this.setState({ loading: true, error: false});
    formData.append('file', acceptedFiles[0]);
    formData.append('delimiter', this.state.delimiter);
    fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res, filteredData: res, loading: false });
      })
      .catch(res => {
        debugger;
        this.setState({ error: 'There is an error while fetching data' });
      });
  };

  render() {
    const { perPage, loading, error, delimiter, data } = this.state;
    let { filteredData } = this.state;
    filteredData = filteredData.slice(0, perPage);
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - The Table Search"
          defaultTitle="The Table Search"
        >
          <meta name="description" content="The Table Search application" />
        </Helmet>
        <b>Note:</b>
        <ul>
          <li>By Default the delimiter passed to server is <b>','</b> we  can change it from Delimiter: input</li>
          <li>Use <b>MOCK_DATA.txt</b> for upload</li>
        </ul>
        <UploadWrapper>
          <Dropzone onDrop={this.onDrop}>
            {({ getRootProps, getInputProps }) => (
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                Click me or drag to upload a file!
              </div>
            )}
          </Dropzone>
        </UploadWrapper>
        <FilterContainer>
          <p>
            Delimiter:
            <Input
              type="text"
              placeholder="Delimiter"
              value={delimiter}
              className="search"
              onChange={e => this.setState({ delimiter: e.target.value })}
            />
          </p>
        </FilterContainer>
        <FilterContainer>
          <h1>User List</h1>
          {!loading && data.length ? <p>Showing <b>{filteredData.length}</b> of <b>{data.length}</b></p> : null}
        </FilterContainer>
        <FilterContainer>
          <p>
            <Input
              type="text"
              placeholder="Search here"
              className="search"
              onChange={this.onChangeQuery}
            />
          </p>
          <p>
            <Input
              type="text"
              placeholder="Numbe of Items"
              value={perPage}
              className="search"
              onChange={this.onChangePerPageCount}
            />
          </p>
        </FilterContainer>
        {!loading ? (
          <Table contacts={filteredData} headers={this.headers} />
        ) : (
          <p>{error ? <ErrorMessage>{error}</ErrorMessage> : 'Loading..'}</p>
        )}
        <GlobalStyle />
      </AppWrapper>
    );
  }
}
