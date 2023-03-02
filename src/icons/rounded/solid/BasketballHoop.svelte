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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16.742 12H7.266a3 3 0 0 0-3 3c0 .123.734 6.06.734 6.06V23a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1.774c.007-.033.742-6.106.742-6.227a3 3 0 0 0-3-3Zm.748 2.337a.984.984 0 0 1 .252.66c0 .041-.115 1-.115 1H15V14h1.742a.987.987 0 0 1 .748.337ZM13 16h-2v-2h2Zm-6.484-1.662a.987.987 0 0 1 .75-.338H9v2H6.383s-.117-.961-.117-1a.981.981 0 0 1 .25-.662ZM6.883 20l-.25-2H9v2ZM11 20v-2h2v2Zm4-2h2.384l-.244 2H15Zm1-8H8V8a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1Zm8-5v8a5 5 0 0 1-2.5 4.332l.21-1.728A5 5 0 0 0 18 10.162V8a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2.163a5 5 0 0 0-3.695 5.457l.214 1.72A5 5 0 0 1 0 13V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5Z"/></svg>
  