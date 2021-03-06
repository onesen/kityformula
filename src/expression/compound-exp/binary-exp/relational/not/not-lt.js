/**
 * "≮"表达式
 */

define( function ( require, exports, modules ) {

    var kity = require( "kity" ),
        NotLtOperator = require( "operator/binary-opr/relational/not/not-lt" );

    return kity.createClass( 'NotLtExpression', {

        base: require( "expression/compound-exp/binary-exp/left-right" ),

        constructor: function ( leftOperand, rightOperand ) {

            this.callBase( leftOperand, rightOperand );

            this.setOperator( new NotLtOperator() );

        }

    } );

} );
