<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4V5c0-2.757-2.243-5-5-5ZM7 2h10c1.654 0 3 1.346 3 3v11.537A3.98 3.98 0 0 0 18 16H4V5c0-1.654 1.346-3 3-3Zm11 20H7c-1.654 0-3-1.346-3-3v-1h14c1.103 0 2 .897 2 2s-.897 2-2 2ZM12.159 8h1.607l.45-1.718a.267.267 0 0 1 .518 0L15.183 8h1.596a.248.248 0 0 1 .124.463l-1.283.742.504 1.531a.263.263 0 0 1-.411.291l-1.237-.956-1.238.957a.261.261 0 0 1-.409-.286l.499-1.56-1.289-.717a.248.248 0 0 1 .121-.464ZM7.06 9.699A4.169 4.169 0 0 1 7.007 9c0-.229.013-.462.053-.699.222-1.313 1.147-2.44 2.371-2.967a4.228 4.228 0 0 1 2.384-.269c.215.04.237.307.06.435C10.5 6.499 10 7.483 10 8.999s.5 2.5 1.56 3.499c.159.15.155.395-.06.435-.7.131-1.263.078-2.069-.269-1.224-.526-2.149-1.653-2.371-2.967Z"/></svg>
  