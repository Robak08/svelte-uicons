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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.507 3.493C18.178 1.164 15.335 0 11.979 0c-3.3 0-6.114 1.164-8.443 3.493C1.179 5.893 0 8.729 0 12c0 3.286 1.179 6.107 3.536 8.464C5.921 22.821 8.735 24 11.979 24c3.313 0 6.178-1.186 8.592-3.557C22.857 18.171 24 15.358 24 12c0-3.357-1.165-6.192-3.493-8.507zm-1.5 15.386c-1.986 1.957-4.315 2.936-6.986 2.936-2.686 0-5-.971-6.943-2.914-1.942-1.929-2.914-4.228-2.914-6.9 0-2.642.978-4.956 2.936-6.942 1.886-1.929 4.193-2.893 6.921-2.893 2.728 0 5.043.964 6.943 2.893 1.914 1.886 2.871 4.2 2.871 6.942 0 2.756-.943 5.049-2.828 6.878z"/><path d="m16.907 8.571-2.615.001V5.958a.641.641 0 0 0-.193-.472.643.643 0 0 0-.472-.193h-6.6a.742.742 0 0 0-.427.225.613.613 0 0 0-.172.439v8.828a.64.64 0 0 0 .193.472.639.639 0 0 0 .472.192h2.614v2.615c0 .186.064.342.193.471a.641.641 0 0 0 .472.193h6.536a.643.643 0 0 0 .471-.193.637.637 0 0 0 .193-.471V9.235a.641.641 0 0 0-.193-.472.646.646 0 0 0-.472-.192zm-6.622 0a.737.737 0 0 0-.406.225.616.616 0 0 0-.172.439v4.907H7.735V6.621h5.25v1.95h-2.7zm5.979 8.829h-5.25V9.878h5.25V17.4z"/></svg>
  