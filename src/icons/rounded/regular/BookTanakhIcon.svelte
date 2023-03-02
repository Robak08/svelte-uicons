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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17 0H7C4.243 0 2 2.243 2 5v14c0 2.757 2.243 5 5 5h11c2.206 0 4-1.794 4-4V5c0-2.757-2.243-5-5-5ZM7 2h10c1.654 0 3 1.346 3 3v11.556A3.949 3.949 0 0 0 18 16H4V5c0-1.654 1.346-3 3-3Zm11 20H7c-1.654 0-3-1.346-3-3v-1h14c1.103 0 2 .897 2 2s-.897 2-2 2Z"/><path d="M6.079 12.255a.501.501 0 0 0 .436.255h3.378l1.68 2.755a.5.5 0 0 0 .854 0l1.68-2.755h3.378a.501.501 0 0 0 .427-.76l-1.67-2.742 1.669-2.738a.499.499 0 0 0-.427-.76h-3.373l-1.684-2.766c-.182-.298-.673-.298-.854 0L9.889 5.51H6.516a.5.5 0 0 0-.427.76l1.669 2.738-1.67 2.742a.501.501 0 0 0-.009.505ZM12 14.044l-.936-1.534h1.871l-.936 1.534Zm-1.545-2.534L8.929 9.008 10.45 6.51h3.099l1.521 2.498-1.526 2.502h-3.091Zm6.14 0h-1.878l.94-1.541.939 1.541Zm0-5-.937 1.537-.936-1.537h1.873Zm-4.594-2.544.94 1.544H11.06L12 3.966ZM7.407 6.51H9.28l-.936 1.537-.937-1.537Zm.938 3.459.94 1.541H7.407l.939-1.541Z"/></svg>
  