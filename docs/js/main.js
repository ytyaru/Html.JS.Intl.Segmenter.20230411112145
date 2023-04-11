window.addEventListener('DOMContentLoaded', async(event) => {
    console.log('DOMContentLoaded!!');
    const EDITOR = document.getElementById('editor')
    const SEG_IDS = ['grapheme', 'word', 'sentence']
    const segmenters = new Map(SEG_IDS.map(g=>[g, new Intl.Segmenter('ja-JP', { granularity:g })]))
    //const segG = new Intl.Segmenter('ja-JP', { granularity: 'grapheme' });
    //const segW = new Intl.Segmenter('ja-JP', { granularity: 'word' });
    //const segS = new Intl.Segmenter('ja-JP', { granularity: 'sentence' });
    //console.log(str.length, [...str].map(c=>c))
    EDITOR.addEventListener('input', async(e) => {
        document.getElementById(`half-width-length`).textContent = e.target.value.HalfWidthLength()
        document.getElementById(`intl-segmenter-grapheme-length`).textContent = Array.from(segmenters.get('grapheme').segment(e.target.value)).length 
        document.getElementById(`output-string-len`).textContent = e.target.value.length 
        document.getElementById(`output-string`).textContent = [...e.target.value].map(c=>c).toString()
        for (let id of SEG_IDS) {
            const segments = Array.from(segmenters.get(id).segment(e.target.value)).map(s=>s.segment)
            document.getElementById(`output-${id}-len`).textContent = segments.length 
            document.getElementById(`output-${id}`).textContent = segments.toString()
        }
    })
    EDITOR.dispatchEvent(new Event('input'))
    EDITOR.focus()
    /*
    segments = Array.from(segG.segment(str));
    console.log(segments.length, segments.map(s=>s.segment))
    segments = Array.from(segW.segment(str));
    console.log(segments.length, segments.map(s=>s.segment))
    segments = Array.from(segS.segment(str));
    console.log(segments.length, segments.map(s=>s.segment))
    */
});
window.addEventListener('beforeunload', (event) => {
    console.log('beforeunload!!');
});

