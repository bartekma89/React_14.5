var Contact = React.createClass({
    propTypes: {
        item: React.PropTypes.object.isRequired
    },
    render: function() {
        return React.createElement('div', { className: 'contactItem' },
            React.createElement('span', { className: 'icon glyphicon glyphicon-user' }),
            React.createElement('div', {className: 'content'},
                React.createElement('p', { className: 'contactLabel' }, 'First Name: ' + this.props.item.firstName),
                React.createElement('p', { className: 'contactLabel' }, 'Last Name: ' + this.props.item.lastName),
                React.createElement('a', {
                        className: 'contactEmail',
                        href: 'mailto:' + this.props.item.email
                    },
                    'Email: ' + this.props.item.email
                )
            )
        );
    }
});