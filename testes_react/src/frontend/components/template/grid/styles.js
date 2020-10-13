import styled from 'styled-components'

const StyledGrid = styled.div`
	display: grid;
    height: 100vh;
    background-color: #eaf2ef;
    grid-template-columns: 100px 1fr;
    background-color: #E3E9EF;
    grid-template-rows: 70px 1fr 90px;
    grid-template-areas: 
        'header header'
        'menu content'
        'menu footer';

    &.menuHidden {
	    grid-template-columns: 1fr;
	    grid-template-areas: 
	        'header'
	        'content'
	        'footer';
	};

	&.menuHidden > menu {
	    display: none;
	};

	.gravatar {
	    height: 40px;
	    width: 40px;
	    border-radius: 5px;
	    margin-right: 10px;
	};

	&.signin {
	    grid-template-columns: 1fr;
	    grid-template-rows: 1fr;
	    grid-template-areas: 'content';
	};

	&.signin > menu {
	    display: none;
	};

	&.signin > footer {
	    display: none;
	};

	&.signin > header {
	    display: none;
	};

`

export { StyledGrid }