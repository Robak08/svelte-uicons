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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2 0a2 2 0 0 0-2 2v20a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2Zm4 2h12v20H6V2Zm.079 12.75a.501.501 0 0 0 .436.255h3.378l1.68 2.755a.5.5 0 0 0 .854 0l1.68-2.755h3.378a.501.501 0 0 0 .427-.76l-1.67-2.742 1.669-2.738a.499.499 0 0 0-.427-.76h-3.373l-1.684-2.766c-.182-.298-.673-.298-.854 0L9.889 8.005H6.516a.5.5 0 0 0-.427.76l1.669 2.738-1.67 2.742a.501.501 0 0 0-.009.505ZM12 16.539l-.936-1.534h1.871l-.936 1.534Zm-1.545-2.534-1.526-2.502 1.521-2.498h3.099l1.521 2.498-1.526 2.502h-3.091Zm6.14 0h-1.878l.94-1.541.939 1.541Zm0-5-.937 1.537-.936-1.537h1.873Zm-4.594-2.544.94 1.544H11.06L12 6.461ZM7.407 9.005H9.28l-.936 1.537-.937-1.537Zm.938 3.459.94 1.541H7.407l.939-1.541ZM22 0a2 2 0 0 0-2 2v20a2 2 0 1 0 4 0V2a2 2 0 0 0-2-2Z"/></svg>
  