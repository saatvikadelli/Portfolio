const highlightTechnicalTerms = (text, terms) => {
    if (!text || !terms || terms.length === 0) {
      return text;
    }
  
    // Sort terms by length (longest first) to handle overlapping terms
    const sortedTerms = [...terms].sort((a, b) => b.length - a.length);
    
    // Create array of text segments with highlighting
    let segments = [{text: text, isHighlight: false}];
    
    sortedTerms.forEach(term => {
      const regex = new RegExp(`(${term})`, 'gi');
      segments = segments.flatMap(segment => {
        if (segment.isHighlight) return [segment];
        
        const parts = segment.text.split(regex);
        return parts.map(part => ({
          text: part,
          isHighlight: regex.test(part)
        }));
      });
    });
  
    // Return the highlighted JSX
    return (
      <span>
        {segments.map((segment, index) => (
          segment.isHighlight ? (
            <span
              key={index}
              className="text-[#FBD19C] font-cascadia"
             
            >
              {segment.text}
            </span>
          ) : segment.text
        ))}
      </span>
    );
  };
  const openInNewTab = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };
export { highlightTechnicalTerms,openInNewTab };
