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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21 0a2.996 2.996 0 0 0-2.816 2H5.816A2.996 2.996 0 0 0 3 0C1.346 0 0 1.346 0 3v18c0 1.654 1.346 3 3 3a2.996 2.996 0 0 0 2.816-2h12.369a2.996 2.996 0 0 0 2.816 2c1.654 0 3-1.346 3-3V3c0-1.654-1.346-3-3-3ZM3 22c-.552 0-1-.449-1-1V3a1.001 1.001 0 0 1 2 0v18c0 .551-.448 1-1 1ZM6 4h12v16H6V4Zm16 17a1.001 1.001 0 0 1-2 0V3a1.001 1.001 0 0 1 2 0v18Z"/><path d="M17.92 8.761a.498.498 0 0 0-.436-.255h-3.373L12.427 5.74c-.182-.298-.672-.298-.854 0L9.889 8.506H6.516a.5.5 0 0 0-.427.76l1.67 2.738-1.67 2.741a.5.5 0 0 0 .427.76h3.378l1.68 2.755a.5.5 0 0 0 .854 0l1.68-2.755h3.378a.5.5 0 0 0 .427-.76l-1.67-2.741 1.67-2.738a.497.497 0 0 0 .009-.505ZM12 6.962l.94 1.544h-1.881l.94-1.544Zm1.549 2.544 1.521 2.498-1.526 2.502h-3.09l-1.526-2.502 1.521-2.498h3.099Zm-6.143 0H9.28l-.936 1.537-.937-1.537Zm0 5 .939-1.541.94 1.541H7.407Zm4.595 2.534-.935-1.534h1.871l-.935 1.534Zm4.595-2.534h-1.878l.94-1.541.939 1.541Zm-.938-3.463-.936-1.537h1.874l-.937 1.537Z"/></svg>
  