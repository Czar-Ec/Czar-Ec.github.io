<li {{#id}}id="{{id}}"{{/id}} class="wsite-menu-item-wrap {{#has_children}}has-submenu{{/has_children}}">
	{{#has_children}}
		<div class="dropdown">
		<span class="dropdown-link">
	{{/has_children}}
	<a
		{{^nonclickable}}
			{{^nav_menu}}
				href="{{url}}"
			{{/nav_menu}}
		{{/nonclickable}}
		{{#nonclickable}}
				class="nonclickable {{#is_current}}active{{/is_current}} wsite-menu-item"
		{{/nonclickable}}
		{{#target}}
			target="{{target}}"
		{{/target}}
		{{#membership_required}}
			data-membership-required="{{.}}"
		{{/membership_required}}
		class="wsite-menu-item {{#is_current}}active{{/is_current}}"
		>
		{{{title_html}}}
	</a>
	{{#has_children}}
		</span>
		<span class="icon-caret"></span>
		</div>
		{{> navigation/flyout/list}}
	{{/has_children}}
</li>
