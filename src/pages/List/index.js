import React, { Component } from 'react';
import PropTypes from 'prop-types';

import {
  ActivityIndicator, FlatList, View, StatusBar, TextInput,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as ActionBooks } from '~/store/ducks/books';

import Header from '~/components/Header';
import ListBook from './ListBook';

import styles from './styles';

class List extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    loadBookRequest: PropTypes.func.isRequired,
    paginationBookRequest: PropTypes.func.isRequired,
    searchBookRequest: PropTypes.func.isRequired,
    navigation: PropTypes.shape().isRequired,
    books: PropTypes.shape({
      data: PropTypes.array,
    }).isRequired,
  };

  state = {
    refreshing: false,
    startIndex: 18,
    search: '',
    searching: false,
  };

  componentDidMount() {
    const { loadBookRequest } = this.props;

    loadBookRequest();
  }

  loadBooks = () => {
    this.setState({ refreshing: true });
    const { loadBookRequest } = this.props;

    loadBookRequest();
    this.setState({ refreshing: false });
  };

  paginationBooks = () => {
    const { startIndex } = this.state;
    const { paginationBookRequest } = this.props;

    paginationBookRequest(startIndex);

    this.setState({ startIndex: startIndex + 19 });
  };

  handleSearching = () => {
    this.setState({ searching: true });
  };

  handleSearch = () => {
    const { search } = this.state;
    const { searchBookRequest } = this.props;

    searchBookRequest(search);

    this.setState({ searching: false });
  };

  renderItem = ({ item }) => <ListBook book={item} />;

  renderFooter = () => (
    <View style={styles.loading}>
      <ActivityIndicator size="small" color="#333" />
    </View>
  );

  renderList = () => {
    const { refreshing } = this.state;
    const { books } = this.props;

    return (
      <FlatList
        data={books.data}
        keyExtractor={item => item.id}
        renderItem={this.renderItem}
        numColumns={3}
        columnWrapperStyle={styles.columnWrapper}
        onRefresh={this.loadBooks}
        refreshing={refreshing}
        onEndReached={this.paginationBooks}
        onEndReachedThreshold={0.1}
        ListFooterComponent={books.loadingPagination ? this.renderFooter() : null}
      />
    );
  };

  render() {
    const { search, searching } = this.state;
    const { books, navigation } = this.props;

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor="#ffea00" barStyle="dark-content" />
        {searching ? (
          <TextInput
            style={styles.search}
            value={search}
            onChangeText={text => this.setState({ search: text })}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Search"
            returnKeyType="send"
            onSubmitEditing={this.handleSearch}
          />
        ) : (
          <Header navigation={navigation} handleSearching={this.handleSearching} />
        )}
        {books.loading ? (
          <View style={styles.activityIndicator}>
            <ActivityIndicator size="large" color="#333" />
          </View>
        ) : (
          this.renderList()
        )}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  books: state.books,
});

const mapDispatchToProps = dispatch => bindActionCreators(ActionBooks, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
