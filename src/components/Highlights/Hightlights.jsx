import React from 'react';
import HighlightsSection from './HighlightsSection/HightlightsSection';
import highlightsData from '../../datas/highlightsData'


const Highlights = () => {

    return (
        <div>
            {highlightsData.map((card, id) =>
                <HighlightsSection
                    key={id}
                    card={card}
                />
            )}
        </div>
    );
}

export default Highlights;
