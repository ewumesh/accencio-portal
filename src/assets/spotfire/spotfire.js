var spotfire;spotfire?spotfire.webPlayer||(spotfire.webPlayer={}):spotfire={webPlayer:{}},function(){
    /**
     * Spotfire namespace.
     * @namespace spotfire
     */
    
    /**
     * Namespace for Spotfire webPlayer mashup functionality.
     * @namespace spotfire.webPlayer
     */
    
    /**
     * @description Error code definitions. Used as argument to the <c>application.onError</c> event.
     * @property {spotfire.webPlayer.errorCodes} ERROROPEN - Error code for opening related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORCLOSE - Error code for closing of analysis related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORBOOKMARK - Error code for bookmark related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORFILTERING - Error code for bookmark related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORMARKING - Error code for marking related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORPAGES - Error code for page related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORINTERNAL - Error code for internal errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORDOCUMENT - Error code for document related errors.
     * @property {spotfire.webPlayer.errorCodes} ERRORCALLBACKS - Error code for API callback related errors.
     */
    spotfire.webPlayer.errorCodes =
    {
        ERROROPEN:'ErrorOpen',
            ERRORCLOSE:'ErrorClose',
            ERRORBOOKMARK:'ErrorBookmark',
            ERRORFILTERING:'ErrorFiltering',
            ERRORMARKING:'ErrorMarking',
            ERRORPAGES:'ErrorPages',
            ERRORINTERNAL:'ErrorInternal',
            ERRORDOCUMENT:'ErrorDocument',
            ERRORCALLBACKS:'ErrorCallbacks'
    };
    
    /**
     * @enum 
     * @example document.marking.setMarking("MyMarking", "MyDataTable", "FirstName=Adam", spotfire.webPlayer.markingOperation.ADD);
     * @description Marking operation definitions. Used as argument to the <c>Marking.setMarking</c> function.
     * @property {spotfire.webPlayer.markingOperation} REPLACE - Replaces the given marking with the new conditions specified in the where clause.
     * @property {spotfire.webPlayer.markingOperation} ADD - Add rows from the specified where clause to the given marking.
     * @property {spotfire.webPlayer.markingOperation} SUBTRACT - Removes rows from the specified where clause in the given marking.
     * @property {spotfire.webPlayer.markingOperation} TOGGLE - Toggles between the current marking and the result of the specified where clause.
     * @property {spotfire.webPlayer.markingOperation} INTERSECT - Intersects the current marking with the marking specified in the where clause.
     * @property {spotfire.webPlayer.markingOperation} CLEAR - Clears the given marking. The where clause will be ignored.
     */
    spotfire.webPlayer.markingOperation =
    {
        REPLACE:'Replace',
            ADD:'Add',
            SUBTRACT:'Subtract',
            TOGGLE:'Toggle',
            INTERSECT:'Intersect',
            CLEAR:'Clear'
    };
    
    /**
     * @description Filtering operation definitions. Used as argument to the <c>FilterSettings.operation</c> property.
     * @property {spotfire.webPlayer.filteringOperation} ADD - Adds values specified in a spotfire.webPlayer.FilterSettings object to the filter.
     * @property {spotfire.webPlayer.filteringOperation} REMOVE - Removes values specified in a spotfire.webPlayer.FilterSettings object to the filter.
     * @property {spotfire.webPlayer.filteringOperation} REPLACE - Replaces all values in the filter with the ones specified in a spotfire.webPlayer.FilterSettings object. If the values contains invalid values, the operation will add all valid values and report an error message with the failed ones.
     * @property {spotfire.webPlayer.filteringOperation} ADD_ALL - Adds all values to the filter. The values property in spotfire.webPlayer.FilterSettings must not be set.
     * @property {spotfire.webPlayer.filteringOperation} REMOVE_ALL - Removes all values from the filter. The values property in spotfire.webPlayer.FilterSettings must not be set.
     * @property {spotfire.webPlayer.filteringOperation} RESET - Resets the filter to its default state.
     */
    spotfire.webPlayer.filteringOperation =
    {
        ADD:'Add',
            REMOVE:'Remove',
            REPLACE:'Replace',
            ADD_ALL:'AddAll',
            REMOVE_ALL:'RemoveAll',
            RESET:'Reset'
    };
    
    /**
     * Defines what settings to include when getting filter columns
     * @property {spotfire.webPlayer.includedFilterSettings} NONE - Do not include any filter settings.
     * @property {spotfire.webPlayer.includedFilterSettings} ALL_WITH_CHECKED_HIERARCHY_NODES - Include all filter settings. Represent hierarchy paths with checked nodes.
     * @property {spotfire.webPlayer.includedFilterSettings} ALL_WITH_UNCHECKED_HIERARCHY_NODES - Include all filter settings. Represent hierarchy paths with unchecked nodes.
     */
    spotfire.webPlayer.includedFilterSettings =
    {
        NONE:'None',
            ALL_WITH_CHECKED_HIERARCHY_NODES:'AllWithCheckedHierarchyNodes',
            ALL_WITH_UNCHECKED_HIERARCHY_NODES:'AllWithUncheckedHierarchyNodes'
    };
    
    /**
     * Defines data column data types.
     * @property {spotfire.webPlayer.columnDataType} STRING - Represents a string.
     * @property {spotfire.webPlayer.columnDataType} INTEGER - Represents an integer.
     * @property {spotfire.webPlayer.columnDataType} REAL - Represents a real number.
     * @property {spotfire.webPlayer.columnDataType} DATE_TIME - Represents a date time.
     * @property {spotfire.webPlayer.columnDataType} DATE - Represents a date.
     * @property {spotfire.webPlayer.columnDataType} TIME - Represents a time.
     * @property {spotfire.webPlayer.columnDataType} CURRENCY - Represents a currency.
     * @property {spotfire.webPlayer.columnDataType} BINARY - Represents a binary.
     * @property {spotfire.webPlayer.columnDataType} BOOLEAN - Represents a boolean.
     * @property {spotfire.webPlayer.columnDataType} LONG_INTEGER - Represents a long integer.
     * @property {spotfire.webPlayer.columnDataType} TIME_SPAN - Represents a time span.
     * @property {spotfire.webPlayer.columnDataType} SINGLE_REAL - Represents a single real.
     */
    spotfire.webPlayer.columnDataType =
    {
        STRING:'String',
            INTEGER:'Integer',
            REAL:'Real',
            DATE_TIME:'DateTime',
            DATE:'Date',
            TIME:'Time',
            CURRENCY:'Currency',
            BINARY:'Binary',
            BOOLEAN:'Boolean',
            LONG_INTEGER:'LongInteger',
            TIME_SPAN:'TimeSpan',
            SINGLE_REAL:'SingleReal'
    };
    
    /**
     * Defines filter types.
     * @property {spotfire.webPlayer.filterType} UNDEFINED - Represents a undefined filter.
     * @property {spotfire.webPlayer.filterType} TEXT_FILTER - Represents a text filter.
     * @property {spotfire.webPlayer.filterType} CHECK_BOX_FILTER - Represents a checkbox filter.
     * @property {spotfire.webPlayer.filterType} RANGE_FILTER - Represents a range filter.
     * @property {spotfire.webPlayer.filterType} LIST_BOX_FILTER - Represents a listbox filter.
     * @property {spotfire.webPlayer.filterType} RADIO_BUTTON_FILTER - Represents a radio button filter.
     * @property {spotfire.webPlayer.filterType} ITEM_FILTER - Represents a item filter.
     * @property {spotfire.webPlayer.filterType} CHECK_BOX_HIERARCHY_FILTER - Represents a checkbox hierarchy filter.
     */
    spotfire.webPlayer.filterType =
    {
        UNDEFINED:'Undefined',
            TEXT_FILTER:'TextFilter',
            CHECK_BOX_FILTER:'CheckBoxFilter',
            RANGE_FILTER:'RangeFilter',
            LIST_BOX_FILTER:'ListBoxFilter',
            RADIO_BUTTON_FILTER:'RadioButtonFilter',
            ITEM_FILTER:'ItemFilter',
            CHECK_BOX_HIERARCHY_FILTER:'CheckBoxHierarchyFilter'
    };
    
    /**
     * @class Customize the appearance of the Web Player. All have default value true, except panels that have null.
     * @returns {spotfire.webPlayer.Customization}
     * @property {boolean} showCustomizableHeader - Shows/hides the customizable header (including the logo).
     * @property {boolean} showClose - Shows/hides the analysis close menu item.
     * @property {boolean} showToolBar - Shows/hides the analysis toolbar and menu.
     * @property {boolean} showExportFile - Shows/hides the export file menu item.
     * @property {boolean} showExportVisualization - Shows/hides the export visualization menu item.
     * @property {boolean} showUndoRedo - Shows/hides the undo/redo menu item.
     * @property {?boolean} showDodPanel - Shows/hides the details on demand panel in the visualization. If null (default value), panel is shown as saved in the analysis.
     * @property {?boolean} showFilterPanel - Shows/hides the filter panel. If null (default value), panel is shown as saved in the analysis.
     * @property {boolean} showPageNavigation - Shows/hides the page navigation controls in the analysis.
     * @property {boolean} showStatusBar - Shows/hides statusbar in the Web Player.
     * @property {boolean} showReloadAnalysis - Shows/hides the Reload analysis button in the toolbar (for Scheduled Updates).
     * @property {boolean} showAnalysisInformationTool - Shows/hides the analysis information tool menu item.
     * @property {boolean} showHelp - Shows/hides the help menu item.
     * @property {boolean} showAbout - Shows/hides the about menu item.
     * @property {boolean} showLogout - Shows/hides the logout menu item.
     * @property {boolean} showAuthor - Shows/hides the button for enabling authoring.
     * @property {boolean} showCollaboration - Shows/hides the collaboration conversation feature.
     * @example
     * var customization = new spotfire.webPlayer.Customization();
     * customization.showCustomizableHeader = false;
     * var application = new spotfire.webPlayer.Application("http://spotfire.cloud.tibco.com/spotfire/wp", "users/myUser/myAnalysis", customization);
     */
    spotfire.webPlayer.Customization = function ()
    {
        this.showCustomizableHeader = true;
        this.showClose = true;
        this.showToolBar = true;
        this.showExportFile = true;
        this.showExportVisualization = true;
        this.showUndoRedo = true;
        this.showDodPanel = null;
        this.showFilterPanel = null;
        this.showPageNavigation = true;
        this.showStatusBar = true;
        this.showReloadAnalysis = true;
        this.showAnalysisInformationTool = true;
        this.showHelp = true;
        this.showAbout = true;
        this.showLogout = true;
        this.showAuthor = true;
        this.showCollaboration = true;
    };
    
    /**
     * @constructor
     * @description Creates a Spotfire Web Player Application instance.
     * @param {string} webPlayerServerRootUrl - The Url to the Spotfire server
     * @param {spotfire.webPlayer.Customization} customizationInfo - The default customization
     * @param {string} analysisPath - The path to the analysis
     * @param {string} [parameters] - Open parameters
     * @param {boolean} [reloadInstances] - If true, Spotfire will try to re-connect to running instance previously created in the browser session
     * @returns {spotfire.webPlayer.Application} - The application
     * @example new spotfire.webPlayer.Application(webPlayerServerRootUrl, customizationInfo, analysisPath, parameters, reloadInstances)
     * @property {spotfire.webPlayer.Document} analysisDocument - Reference to the first Document object loaded. This property will be null if no document is loaded.
     * @property {spotfire.webPlayer.Document[]} analysisDocument - Array with all open documents.
     */
    spotfire.webPlayer.Application = function(
        webPlayerServerRootUrl,
        customizationInfo,
        analysisPath,
        parameters,
        reloadInstances)
    {
        var app = new spotfire.webPlayer.InternalApplication(webPlayerServerRootUrl,
            customizationInfo,
            analysisPath,
            parameters,
            reloadInstances);
    
        Object.defineProperty(this, 'analysisDocument', { get: function() { return app.analysisDocument; } });
        Object.defineProperty(this, 'analysisDocuments', { get: function() { return app.analysisDocuments; } });
    
        /**
         * @function
         * @description Open the analysis specified by the application. The onOpened event will fire when the document is loaded. Multiple documents can be opened for a single application.
         * @param {string} elementId - The id of the DOM element in which to display the Web Player. The Web Player will adapt to the size of this element.
         * @param {(string|number)} [initialPage] - Specifies the initial page when opening the analysis. Either page id (boolean) or page title can be used. If not set, the current page of the analysis will be used.
         * @param {spotfire.webPlayer.Customization} [customizationInfo] - Customization of the UI. This will override customization set when creating the application.
         * @return {spotfire.webPlayer.Document} document - The document. Note that the API methods defined by this instance will be queued until the [onLoaded]{@link spotfire.webPlayer.Application#onLoaded} event is raised.
         */
        this.openDocument = app.openDocument;
    
        /**
         * @function
         * @description Open a given analysis. The [onOpened]{@link spotfire.webPlayer.Application#onOpened} event will be raised when the document is opened.</summary>
         * @param {string} analysisPath - The path in the library to the analysis to open.
         * @param {string} divId - The id of the DIV element in which to display the Web Player. The Web Player will adapt to the size of the surrounding DIV.
         * @param {string} parameter - Load parameters for the analysis (bookmarks, Information Link parameters, etc.). Example: 'Parameters.Param = {val1, "Val 2"}; SetPage(pageIndex = 1); ApplyBookmark(bookmarkName="All");'. For more information see: Parameter Configuration Block.
         * @param {string} documentId - If set, just refresh an existing web analysis.
         * @deprecated Use [openDocument]{@link spotfire.webPlayer.Application#openDocument}
         */
        this.open = app.open;
    
        /**
         * @function
         * @description Closes all currently opened documents. Will raise [onError]{@link spotfire.webPlayer.Application#onError} if no document is opened, or the closing failed.</summary>
         */
        this.close = app.close;
    
        /**
         * @function
         * @description Registers an event handler for the onOpened event.
         * @param {spotfire.webPlayer.Application.onOpened} callback - The event handler.
         */
        this.onOpened = app.onOpened;
    
        /**
         * @function
         * @description Registers an event handler for the onClosed event.
         * @param {spotfire.webPlayer.Application.onClosed} callback - The event handler.
         */
        this.onClosed = app.onClosed;
    
        /**
         * @function
         * @description Registers an event handler for the onError event.
         * @param {spotfire.webPlayer.Application.onError} callback - The event handler.
         */
        this.onError = app.onError;
    
        /**
         * @function
         * @description Registers an event handler for the onLoggedOut event.
         * @param {spotfire.webPlayer.Application.onLoggedOut} callback - The event handler.
         */
        this.onLoggedOut = app.onLoggedOut;
    };
    
    /**
     * @class
     * @description Contains document related functionality.
     * The document is created by calling the [openDocument]{@link spotfire.webPlayer.Application#openDocument} function.
     * The document is not ready to be used until the [onOpened]{@link spotfire.webPlayer.Appliction#onOpened} is raised. API methods called before this event will be queued and executed once the document is ready.
     * @property {spotfire.webPlayer.Data} data - Reference to the [Data]{@link spotfire.webPlayer.Data} object.
     * @property {spotfire.webPlayer.Marking} marking - Reference to the [Marking]{@link spotfire.webPlayer.Marking} object.
     * @property {spotfire.webPlayer.Filtering} filtering - Reference to the [Filtering]{@link spotfire.webPlayer.Filtering} object.
     * @property {string} elementId - The name of the DOM element that contains the Spotfire document.
     * @property {boolean} isLoaded - Returns a value indicating whether the document is loaded. When this value is false it is not possible to use any API methods on the document instance.
     */
    spotfire.webPlayer.Document = function (idoc)
    {
        this.data = new spotfire.webPlayer.Data(idoc.apply);
        this.marking = new spotfire.webPlayer.Marking(idoc.apply);
        this.filtering = new spotfire.webPlayer.Filtering(idoc.apply);
    
        Object.defineProperty(this, 'isLoaded', { get: function () { return idoc.isLoaded(); } });
        Object.defineProperty(this, 'elementId', { get: function () { return idoc.elementId; } });
    
        var apply = idoc.apply.bind(undefined, "DocumentScriptNode");
    
        /**
         * @function
         * @description Change the active page by page title or page index. The [onError]{@link  spotfire.webPlayer.Application#onError} event will be raised if the page does not exist.
         * @param {(string|number)} pageIndexOrTitle - Page index (0 based) or page title.
         */
        this.setActivePage = function(pageIndexOrTitle)
        {
            apply("SetActivePage", [pageIndexOrTitle]);
        };
    
        /**
         * @function
         * @description Applies a bookmark by its name. The [onError]{@link spotfire.webPlayer.Application#onError} event will be raised if the
         * bookmarks does not exist or if several bookmark have the name.
         * @deprecated Use [applyBookmarkById]{@link spotfire.webPlayer.Document#applyBookmarkById} from API version 3.3 and forward.
         * @param  {string} bookmarkName - The bookmark name.
         */
        this.applyBookmark = function(bookmarkName)
        {
            apply("ApplyBookmark", [bookmarkName]);
        };
    
        /**
         * Register a callback function that will be called when a page change occurs in the analysis.
         * @function
         * @param {spotfire.webPlayer.Document.onActivePageChanged} callback - The event handler.
         */
        this.onActivePageChanged = function(callback)
        {
            apply("OnActivePageChanged", [callback]);
        };
    
        /**
         * Register a callback function that will be called when the document is ready.
         * @function
         * @param {spotfire.webPlayer.Document.onDocumentReady} callback
         */
        this.onDocumentReady = function (callback)
        {
            idoc.onDocumentReady(callback);
        };
    
        /**
         * Applies a bookmark by its id. The [onError]{@link spotfire.webPlayer.Application.onError} event will be raised if the bookmarks does not exist.
         * @param {id} - The identifier of the bookmark to apply.
         * @since 3.3
         */
        this.applyBookmarkById = function(id)
        {
            apply("ApplyBookmarkById", [id]);
        };
    
        /**
         * Get the bookmarks in the document.
         * @param {spotfire.webPlayer.Document.onGetBookmarks} callback - The callback function.
         * @since 3.3
         */
        this.getBookmarks = function(callback)
        {
            apply("GetBookmarks", [callback]);
        };
    
        /**
         * Get the metadata for the document.
         * @param {spotfire.webPlayer.Document.onGetDocumentMetaData} The callback function.
         * @since 3.1
         */
        this.getDocumentMetadata = function(callback)
        {
            apply("GetDocumentMetadata", [callback]);
        };
    
        /**
         * Get the names of the bookmarks in the document.
         * @param {spotfire.webPlayer.Document.onGetBookmarkNames} callback
         * @since 3.1
         */
        this.getBookmarkNames = function(callback)
        {
            apply("GetBookmarkNames", [callback]);
        };
    
        /**
         * Set the value of an existing property.
         * @param {string} propertyName - The name of the property.
         * @param {any} propertyValue - The value of the property as a formatted string or an array of formatted strings, in the users locale.
         * @since 3.1
         */
        this.setDocumentProperty = function(propertyName, propertyValue)
        {
            apply("SetDocumentProperty", [propertyName, propertyValue]);
        };
    
        /**
         * Get the information about the property with given name.
         * @param {string} propertyName - The name of the property.
         * @param {spotfire.webPlayer.onGetProperty} callback - The callback function.
         * @since 3.1
         */
        this.getDocumentProperty = function(propertyName, callback)
        {
            apply("GetDocumentProperty", [propertyName, callback]);
        };
    
        /**
         * Get a list of all the properties in the document.
         * @param {spotfire.webPlayer.onGetProperties} callback - The callback function.
         * @since 3.1
         */
        this.getDocumentProperties = function(callback)
        {
            apply("GetDocumentProperties", [callback]);
        };
    
        /**
         * Register a callback function that will be called when a given property has changed value.
         * @param {string} propertyName - The name of the property to monitor.
         * @param {spotfire.webPlayer.onGetProperty} callback - The callback function.
         * @since 3.1
         */
        this.onDocumentPropertyChanged = function(propertyName, callback)
        {
            apply("OnDocumentPropertyChanged", [propertyName, callback]);
        };
    
        /**
         * Gets the active page.
         * @param {spotfire.webPlayer.Document.onGetActivePage} callback - The callback function.
         * @since 3.1
         */
        this.getActivePage = function(callback)
        {
            apply("GetActivePage", [callback]);
        };
    
        /**
         * Gets all pages in the opened analysis.
         * @param {spotfire.webPlayer.Document.onGetPages} callback - The callback function.
         * @since 3.1
         */
        this.getPages = function(callback)
        {
            apply("GetPages", [callback]);
        };
    
        /**
         * Launch the export to Pdf dialog.
         * @since 7.5
         */
        this.exportToPdf = function()
        {
            apply("ExportToPdf", []);
        };
    
        /**
         * Launch the export to PowerPoint dialog.
         * @since 7.5
         */
        this.exportToPowerPoint = function()
        {
            apply("ExportToPowerPoint", []);
        };
    
        /**
         * Export active visualization image.
         * @param {number} width - The width of the exported image. Default value is 800px.
         * @param {number} height - The height of the exported image. Default value is 600px.
         * @since 7.5
         */
        this.exportActiveVisualAsImage = function(width, height)
        {
            apply("ExportActiveVisualAsImage", [width, height]);
        };
    
        /**
         * Launch the print dialog.
         * @since 7.5
         */
        this.print = function()
        {
            apply("Print", []);
        };
    
        /**
         * Execute a custom tool.
         * @param {string} fullToolName - The full name of the tool to execute, inlcuding namespace (e.g. "MyCompany.Spotfire.CustomTools.MyTool").
         * @since 7.5
         */
        this.executeCustomTool = function(fullToolName)
        {
            apply("ExecuteCustomTool", [fullToolName]);
        };
    
        /**
         * Execute a custom export tool.
         * @param {string} fullToolName - The full name of the export tool to execute, inlcuding namespace (e.g. "MyCompany.Spotfire.CustomTools.MyTool").
         * @since 7.5
         */
        this.executeCustomExportTool = function(fullToolName)
        {
            apply("ExecuteCustomExportTool", [fullToolName]);
        };
    
        /**
         * Logout the user
         * @param {boolean} showConfirmation - If True, a confirmation dialog will be presented to the user. 
         * @since 7.5
         */
        this.logout = function(showConfirmation)
        {
            apply("Logout", [showConfirmation]);
        };
    
        /**
         * Download the analysis as a dxp file.
         * @since 7.5
         */
        this.downloadAsDxp = function()
        {
            apply("DownloadAsDxp", []);
        };
    
        /**
         * Close the document.
         * The [onClosed]{@link spotfire.webPlayer.Application.onClosed} callback will be called for the document.
         * Note that there may be other open document instances for the application.
         * @since 7.5
         */
        this.close = function ()
        {
            idoc.closeDocument();
        };
    };
    
    /**
     * @class
     * @description Contains marking related functionality.
     * This object is created when the analysis document is loaded.
     * To get an instance of this object use the marking property in the [Document]{@link spotfire.webPlayer.Document} object.
     */
    spotfire.webPlayer.Marking = function (applyFunc)
    {
        var apply = applyFunc.bind(undefined, "MarkingScriptNode");
    
        /**
         * @function
         * @description Sets a marking in the analysis specified by the input parameters.
         * @param {string} markingName - The marking name in which to set the marking.
         * @param {string} dataTableName - The data table name in which to set the marking.
         * @param {string} whereClause - An expression string with conditions for the data columns used to set the marking. For more information, see the documentation for the TIBCO Spotfire Expression Language.
         * @param {spotfire.webPlayer.markingOperation} markingOperation - A marking operation to use when marking. The different options are expaned in [markingOperation]{@link spotfire.webPlayer.markingOperation}.
         */
        this.setMarking = function(markingName, dataTableName, whereClause, markingOperation)
        {
            apply("SetMarking", [markingName, dataTableName, whereClause, markingOperation]);
        };
    
        /**
         * @function
         * @description Register a callback function that is to be called when marking is changed in the analysis.
         * @param {string} markingName  - The marking name in which to listen for changes.
         * @param {string} dataTableName - The name of the data table in which to listen for marking changes.
         * @param {string[]} dataColumnNames - Array of data column names that should be included in the result.
         * @param {number} maxRows - The maximum number of marked rows to return.
         * @param {spotfire.webPlayer.Marking.onMarking} callback - The callback function
         * @param {string} [intersectionFilteringName] - Only call the callback if marking changes ocurrs in the intersection between the displayed data from the filtering scheme and the displayed data from the marking parameters.
         */
        this.onChanged = function(markingName,
            dataTableName,
            dataColumnNames,
            maxRows,
            callback,
            intersectionFilteringName)
        {
            apply("OnChanged", [markingName, dataTableName, dataColumnNames, maxRows, callback, intersectionFilteringName]);
        };
    
        /**
         * Get the currently marked rows.
         * @param {string} markingName - The name of the marking.
         * @param {string} dataTableName - The name of the data table for the columns.
         * @param {string[]} dataColumnNames - Array of data column names that should be included in the result.
         * @param {number} maxRows - Maximum number of rows to get.
         * @param {spotfire.webPlayer.Marking.onMarking} callback - The callback function.
         * @since 3.1
         */
        this.getMarking = function(markingName, dataTableName, dataColumnNames, maxRows, callback)
        {
            apply("GetMarking", [markingName, dataTableName, dataColumnNames, maxRows, callback]);
        };
    
        /**
         * Get the names of the marking sets in the document
         * @param {spotfire.webPlayer.Marking.onGetMarkingNames} callback - The callback function.
         * @since 3.1
         */
        this.getMarkingNames = function(callback)
        {
            apply("GetMarkingNames", [callback]);
        };
    };
    
    /**
     * @class
     * @description Contains data related functionality. This object is created when the document is loaded.
     * To get an instance of this object use the data property in the [Document]{@link spotfire.webPlayer.Document} object.
     */
    spotfire.webPlayer.Data = function (applyFunc)
    {
        var apply = applyFunc.bind(undefined, "DataScriptNode");
    
        /**
         * Register a callback function that will be called when filtered range in a data column is changed.
         * @param {string} filteringSchemeName - The name of the filtering scheme in which to listen for filtering changes.
         * @param {string} dataTableName - The name of the data table in which to listen for filtering changes.
         * @param {string} dataColumnName - The name of the filtering data column in which to listen for filtering changes.
         * @param {spotfire.webPlayer.Data.onRangeChanged} callback - The callback function.
         */
        this.onRangeChanged = function(filteringSchemeName, dataTableName, dataColumnName, callback)
        {
            apply("OnRangeChanged", [filteringSchemeName, dataTableName, dataColumnName, callback]);
        };
    
        /**
         * Get the [data table]{@link spotfire.webPlayer.DataTable} with given name.
         * @param {string} dataTableName - The name of the data table.
         * @param {spotfire.webPlayer.Data.onGetDataTable} callback - The callback function.
         * @since 3.1
         */
        this.getDataTable = function(dataTableName, callback)
        {
            apply("GetDataTable", [dataTableName, callback]);
        };
    
        /**
         * Get all [data table]{@link spotfire.webPlayer.DataTable}s in the document.
         * @param {spotfire.webPlayer.Data.onGetDataTables} callback - The callback function.
         * @since 3.1
         */
        this.getDataTables = function(callback)
        {
            apply("GetDataTables", [callback]);
        };
    
        /**
         * Gets the current [data table]{@link spotfire.webPlayer.DataTable} object.
         * @param {spotfire.webPlayer.Data.onGetDataTable} callback - The callback function.
         * @since 3.1
         */
        this.getActiveDataTable = function(callback)
        {
            apply("GetActiveDataTable", [callback]);
        };
    };
    
    /**
     * @class
     * @description Holds information about a data table in the document. To get the information use the [data]{@link spotfire.webPlayer.Data} object.
     * @since 3.1
     */
    spotfire.webPlayer.DataTable = function(applyFunc, dataTableName)
    {
        /// <summary>Creates a data table object.</summary>
        this.dataTableName = dataTableName;
    
        var apply = applyFunc.bind(undefined, "DataTableScriptNode");
    
       /**
         * Get a [data column]{@link spotfire.webPlayer.DataColumn} with given name.
         * @param {string} dataColumnName - The name of the data column.
         * @param {spotfire.webPlayer.DataTable.onGetDataColumn} callback - The callback function
         */
        this.getDataColumn = function(dataColumnName, callback)
        {
            apply("GetDataColumn", [dataTableName, dataColumnName, callback]);
        };
    
        /**
         * Get all data columns in the table.
         * @param {spotfire.webPlayer.DataTable.onGetDataColumns} callback - The callback function.
         */
        this.getDataColumns = function(callback)
        {
            apply("GetDataColumns", [dataTableName, callback]);
        };
    
        /**
         * Get the [data column]{@link spotfire.webPlayer.DataColumn}s that matches the search expression.
         * @param {string} searchExpression - The search expression. For search syntax see TIBCO Spotfire user manual.
         * @param {spotfire.webPlayer.DataTable.onGetDataColumns} callback - The callback function.
         */
        this.searchDataColumns = function(searchExpression, callback)
        {
            /// <summary>Searches for data columns given a search expression.</summary>
            /// <param name="searchExpression" type="string">Search expression.</param>
            /// <param name="callback" type="function">A callback function with the following signature: function(dataColumns) {}. The first parameter in the signature is an array of spotfire.webPlayer.Data.DataColumn instances.</param>
            apply("SearchDataColumns", [dataTableName, searchExpression, callback]);
        };
    
        /**
         * List all properties in a table.
         * @param {spotfire.webPlayer.onGetProperties} callback - The callback function
         */
        this.getDataTableProperties = function(callback)
        {
            apply("GetDataTableProperties", [dataTableName, callback]);
        };
    
        /**
         * Get the information about the property with given name.
         * @param {string} propertyName - The name of the property.
         * @param {spotfire.webPlayer.onGetProperty} callback - The callback function
         */
        this.getDataTableProperty = function(propertyName, callback)
        {
            apply("GetDataTableProperty", [dataTableName, propertyName, callback]);
        };
    
        /**
         * Set the value of an existing property.
         * @param {string} propertyName - The name of the property.
         * @param {any} propertyValue - The value of the property as a formatted string or an array of formatted strings, in the users locale.
         */
        this.setDataTableProperty = function(propertyName, propertyValue)
        {
            apply("SetDataTableProperty", [dataTableName, propertyName, propertyValue]);
        };
    
        /**
         * Register a callback function that is called when a data table property has changed value.
         * @param {string} propertyName - The name of the property to monitor.
         * @param {spotfire.webPlayer.onGetProperty} callback - The callback function.
         */
        this.onDataTablePropertyChanged = function(propertyName, callback)
        {
            apply("OnDataTablePropertyChanged", [dataTableName, propertyName, callback]);
        };
    };
    
    /**
     * @class
     * @description Holds information about a data column in the document. To get the information use the column functions in [DataTable]{@link spotfire.webPlayer.DataTable} object.
     * @property {string} dataColumnName - The name of the data column.
     * @property {string} dataTableName -The name of the [data table]{@link spotfire.webPlayer.DataTable} containing this column.
     * @property {spotfire.webPlayer.columnDataType} dataType - The data type of the column.
     * @since 3.1
     */
    spotfire.webPlayer.DataColumn = function(applyFunc, dataTableName, dataColumnName, dataType)
    {
        this.dataTableName = dataTableName;
        this.dataColumnName = dataColumnName;
        this.dataType = dataType;
    
        var apply = applyFunc.bind(undefined, "DataColumnScriptNode");
    
        /**
         * Get a list of the properties in the column.
         * @param {spotfire.webPlayer.onGetProperties} callback - The callback function.
         */
        this.getDataColumnProperties = function(callback)
        {
            apply("GetDataColumnProperties", [dataTableName, dataColumnName, callback]);
        };
    
        /**
         * Get the information about the property with given name.
         * @param {string} propertyName - The name of the property.
         * @param {spotfire.webPlayer.onGetProperty} callback - The callback function
         */
        this.getDataColumnProperty = function(propertyName, callback)
        {
            apply("GetDataColumnProperty", [dataTableName, dataColumnName, propertyName, callback]);
        };
    
        /**
         * Set the value of an existing property.
         * @param {string} propertyName - The name of the property.
         * @param {any} propertyValue - The value of the property as a formatted string or an array of formatted strings, in the users locale.
         */
        this.setDataColumnProperty = function(propertyName, propertyValue)
        {
            apply("SetDataColumnProperty", [dataTableName, dataColumnName, propertyName, propertyValue]);
        };
    
        /**
         * Register a callback function that is called when a column property has changed value.
         * @param {string} propertyName - The name of the property to monitor.
         * @param {spotfire.webPlayer.onGetProperty} callback - The callback function.
         */
        this.onDataColumnPropertyChanged = function(propertyName, callback)
        {
            apply("OnDataColumnPropertyChanged", [dataTableName, dataColumnName, propertyName, callback]);
        };
    
        /**
         * Get a list of the unique values in the data column.
         * @param {number} startIndex - The zero-based start index of the distinct values.
         * @param {number} responseLimit - Limit the response to this number of values.
         * @param {spotfire.webPlayer.DataColumn.onGetDistinctValues} callback - The callback function.
         * @since 7.5
         */
        this.getDistinctValues = function(startIndex, responseLimit, callback)
        {
            apply("GetDataColumnDistinctValues", [dataTableName, dataColumnName, startIndex, responseLimit, callback]);
        };
    };
    
    /**
     * @class
     * @description Contains filtering related functionality.
     * @since 3.1
     * This object is created when the document is loaded. To get an instance of this object use the filtering property of the [Document]{@link spotfire.webPlayer.Document} object.
     */
    spotfire.webPlayer.Filtering = function(applyFunc)
    {
        var apply = applyFunc.bind(undefined, "FilterScriptNode");
    
        /**
         * Set the value(s) of a filter column.
         * @param {spotfire.webPlayer.FilterColumn} filterColumn - The filter column and its value(s).
         * @param {spotfire.webPlayer.filteringOperation} filteringOperation - Option how the filtering should be applied.
         * @since 3.1
         */
        this.setFilter = function(filterColumn, filteringOperation)
        {
            apply("SetFilter_31", [filterColumn, filteringOperation]);
        };
    
        /**
         * Resets all filters to the default values.
         */
        this.resetAllFilters = function ()
        {
            apply("ResetAllFilters", []);
        };
    
        /**
         * Resets all filters on active page to their default values.
         * @since 5.0
         */
        this.resetAllFiltersOnActivePage = function()
        {
            apply("ResetAllFiltersOnActivePage", arguments);
        };
    
        /**
         * Get the information about a filter column.
         * @param {string} filteringSchemeName - The filtering scheme name where the filter column is located.
         * @param {string} dataTableName - The data table name in which the filter column is located.
         * @param {string} dataColumnName - The name of the filter column.
         * @param {spotfire.webPlayer.includedFilterSettings} includedFilterSettings - <pre>How the filter values should be returned.
         * Note, for some filter types like the checkbox hierarchy filter, the value can contain large amounts of data.
         * Checkbox hierarchy filters that loads data on request will return an empty list.
         * </pre>
         * @param {spotfire.webPlayer.Filtering.onGetFilterColumn} callback - The callback function
         * @since 3.1
         */
        this.getFilterColumn = function(filteringSchemeName,
            dataTableName,
            dataColumnName,
            includedFilterSettings,
            callback)
        {
            apply("GetFilterColumn", [filteringSchemeName, dataTableName, dataColumnName, includedFilterSettings, callback]);
        };
    
        /**
         * Get the information about the active [filtering scheme]{@link spotfire.webPlayer.FilteringScheme}.
         * @param {spotfire.webPlayer.Filtering.onGetFilteringScheme} callback - The callback function.
         */
        this.getActiveFilteringScheme = function(callback)
        {
            apply("GetActiveFilteringScheme", [callback]);
        };
    
        /**
         * Get the information about the active [filtering scheme]{@link spotfire.webPlayer.FilteringScheme}.
         * @param {string} filteringSchemeName - The name of the [filtering scheme]{@link spotfire.webPlayer.FilteringScheme} to get.
         * @param {spotfire.webPlayer.Filtering.onGetFilteringScheme} callback - The callback function.
         */
        this.getFilteringScheme = function(filteringSchemeName, callback)
        {
            apply("GetFilteringScheme", [filteringSchemeName, callback]);
        };
    
        /**
         * Get the information of all the [filtering scheme]{@link spotfire.webPlayer.FilteringScheme}s in the document.
         * @param {spotfire.webPlayer.Filtering.onGetFilteringSchemes} callback - The callback function.
         */
        this.getFilteringSchemes = function(callback)
        {
            /// <summary>Gets all filtering schemes.</summary>
            /// <param name="callback" type="function">A callback function with the following signature: function(filteringSchemes) {}. The first parameter in the signature is an array of spotfire.webPlayer.Filtering.FilteringScheme instances.</param>
            apply("GetFilteringSchemes", [callback]);
        };
    
        /**
         * Apply new values to a list of filters.
         * @param {spotfire.webPlayer.FilterColumn[]} filterColumns - The filter columns and their values.
         * @param {spotfire.webPlayer.filteringOperation} filteringOperation - Option how the filtering should be applied.
         */
        this.setFilters = function(filterColumns, filteringOperation)
        {
            apply("SetFilters", [filterColumns, filteringOperation]);
        };
    
        /**
         * Get the information about all filter columns that do not have the default value selected in all filtering schemas.
         * @param {spotfire.webPlayer.includedFilterSettings} includedFilterSettings - <pre>How the filter values should be returned.
         * Note, for some filter types like the checkbox hierarchy filter, the value can contain large amounts of data.
         * Checkbox hierarchy filters that loads data on request will return an empty list.</pre>
         * @param {spotfire.webPlayer.Filtering.onGetFilterColumns} callback - The callback function.
         */
        this.getAllModifiedFilterColumns = function(includedFilterSettings, callback)
        {
            /// <summary>Gets all modified filter columns in all schemes.</summary>
            /// <param name="includedFilterSettings" type="spotfire.webPlayer.includedFilterSettings">Specify how filter settings should be included in the result.</param>
            /// <param name="callback" type="function">A callback function with the following signature: function(filterColumns) {}. The first parameter in the signature is an array of spotfire.webPlayer.FilterColumn instances.</param>
            apply("GetAllModifiedFilterColumns", [includedFilterSettings, callback]);
        };
    
        /**
         * Get the information about all filter columns that do not have the default value selected.
         * @param {string} filteringSchemeName - The filtering scheme name where the filter columns are located.
         * @param {spotfire.webPlayer.includedFilterSettings} includedFilterSettings - <pre>How the filter values should be returned.
         * Note, for some filter types like the checkbox hierarchy filter, the value can contain large amounts of data.
         * Checkbox hierarchy filters that loads data on request will return an empty list.</pre>
         * @param {spotfire.webPlayer.Filtering.onGetFilterColumns} callback - The callback function.
         */
        this.getModifiedFilterColumns = function(filteringSchemeName, includedFilterSettings, callback)
        {
            apply("GetModifiedFilterColumns", [filteringSchemeName, includedFilterSettings, callback]);
        };
    };
    
    /**
     * @class
     * @description Contains filtering scheme related funtionallity and data.
     * To get an instance of this object use the get filtering scheme function in [Filtering]{@link spotfire.webPlayer.Filtering}.
     * @property {string} filteringSchemeName - The name of the filtering scheme.
     * @property {string[]} dataTableNames - The names of the [data table]{@link spotfire.webPlayer.DataTable}s that is contained in this filter scheme.
     * @since 3.1
     */
    spotfire.webPlayer.FilteringScheme = function(applyFunc, filteringSchemeName, dataTableNames)
    {
        this.filteringSchemeName = filteringSchemeName;
        this.dataTableNames = dataTableNames;
    
        var apply = applyFunc.bind(undefined, "FilteringSchemeScriptNode");
    
        /**
         * Get the information about a [filter column]{@link spotfire.webPlayer.FilterColumn}.
         * @param {string} dataTableName - The name of the data table for the filter column.
         * @param {string} filterColumnName - The name of the data column to retieve.
         * @param {spotfire.webPlayer.includedFilterSettings} includedFilterSettings - <pre>How the filter values should be returned.
         * Note, for some filter types like the checkbox hierarchy filter, the value can contain large amounts of data.
         * Checkbox hierarchy filters that loads data on request will return an empty list.</pre>
         * @param {spotfire.webPlayer.Filtering.onGetFilterColumn} callback - The callback function.
         */
        this.getFilterColumn = function(dataTableName, filterColumnName, includedFilterSettings, callback)
        {
            apply("GetFilterColumn", [filteringSchemeName, dataTableName, filterColumnName, includedFilterSettings, callback]);
        };
    
        /**
         * Get the information about the [filter column]{@link spotfire.webPlayer.FilterColumn]s in a [data table]{@link spotfire.webPlayer.DataTable].
         * @param {string} dataTableName - The name of the data table for the filter column.
         * @param {spotfire.webPlayer.includedFilterSettings} includedFilterSettings - <pre>How the filter values should be returned.
         * Note, for some filter types like the checkbox hierarchy filter, the value can contain large amounts of data.
         * Checkbox hierarchy filters that loads data on request will return an empty list.</pre>
         * @param {spotfire.webPlayer.Filtering.onGetFilterColumns} callback - The callback function.
         */
        this.getFilterColumns = function(dataTableName, includedFilterSettings, callback)
        {
            apply("GetFilterColumns", [filteringSchemeName, dataTableName, includedFilterSettings, callback]);
        };
    
        /**
         * Get the information about the [filter column]{@link spotfire.webPlayer.FilterColumn}s in the default filtering scheme and [data table]{@link spotfire.webPlayer.DataTable}.
         * @param {spotfire.webPlayer.includedFilterSettings} includedFilterSettings - <pre>How the filter values should be returned.
         * Note, for some filter types like the checkbox hierarchy filter, the value can contain large amounts of data.
         * Checkbox hierarchy filters that loads data on request will return an empty list.</pre>
         * @param {spotfire.webPlayer.Filtering.onGetFilterColumns} callback - The callback function.
         */
        this.getDefaultFilterColumns = function(includedFilterSettings, callback)
        {
            apply("GetDefaultFilterColumns", [filteringSchemeName, includedFilterSettings, callback]);
        };
    };
    
    /**
     * @class
     * @description Used to get and set values and settings on filter columns.
     * @property {boolean} includeEmpty - Specifies if empty values should be included in the filtering.
     * @property {string} highValue - The high value of a Range Filter.
     * @property {string} lowValue - The low value of a Range Filter.
     * @property {string} searchPattern - Specifies search pattern for Text Filters and ListBox Filters.
     * @property {string[]} values - <pre>The values to of a filter column.
     * - Item Filters
     * - CheckBox Filters
     * - RadioButton Filter
     * - ListBox Filters
     * When used with Item Filters and RadioButton Filters; only the first index in the array is used.</pre>
     * @property {string[][]} hierarchyPaths - <pre>The paths of the checked or unchecked, depending on the selected includedFilterSettings, nodes in a CheckBox Hierarchy Filter.
     * The property contains an array of path elements, one for each selected value.
     * The list will only contain the top most element of the selected nodes.
     * If a node contains only selected children, only that (top) node is returned, not the children.
     * </pre>
     */
    spotfire.webPlayer.FilterSettings = function()
    {
        this.values = [];
        this.lowValue = null;
        this.highValue = null;
        this.includeEmpty = null;
        this.searchPattern = null;
        this.hierarchyPath = null;
    };
    
    //
    // Callback definitions
    //
    /**
     * Callback called when an error occurs in the analysis or API. The callback function is registered by calling [Application.onError]{@link spotfire.webPlayer.Application.onError} function.
     * @callback spotfire.webPlayer.Application.onError
     * @param {spotfire.webPlayer.errorCodes} errorCode - The error code.
     * @param {string} errorDescription - An error description.
     */
    
    /**
     * Callback called when a document is opened.
     * @callback spotfire.webPlayer.Application.onOpened
     * @param {spotfire.webPlayer.Document} document - The document that was opened
     */
    
    /**
     * Callback called when a document is closed. The callback function is registered by calling [Application.onClosed]{@link spotfire.webPlayer.Application.onClosed} function.
     * @callback spotfire.webPlayer.Application.onClosed
     * @param {string} analysisPath - The path to the document that was closed.
     * @param {spotfire.webPlayer.Document} document - The document that was closed.
     */
    
    /**
     * Callback called when the user is logged out.
     * @callback spotfire.webPlayer.Application.onLoggedOut
     * @param {string} analysisPath - The path to the document that was closed.
     * @param {spotfire.webPlayer.Document} document - The document that was closed.
     */
    
    /**
     * Callback called when the action page was changed for a document.
     * @callback spotfire.webPlayer.Document.onActivePageChanged
     * @param {spotfire.webPlayer.PageState} pageState - The new page state.
     */
    
    /**
     * Callback called when the document switches to the ready state (the round icon in the status bar becomes green).
     * @callback spotfire.webPlayer.Document.onDocumentReady
     */
    
    /**
     * @callback spotfire.webPlayer.Marking.onMarking
     * @description Callback called when a marking table is retrieved.
     * @param {string[][]} marking - <pre>The marked rows.
     * The array has the following format:
     * array["Column Name"][n], where n is the data row index.</pre>
    */
    
    /**
     * Callback called when returning marking names [getMarkingNames]{@link spotfire.webPlayer.Marking~getMarkingNames} function.
     * @callback spotfire.webPlayer.Marking.onGetMarkingNames
     * @param {string[]} names - The names of all markings in the document.
    */
    
    /**
     * @callback spotfire.webPlayer.Data.onGetDataTable
     * @description Callback called when a data table object is retrieved.
     * @param {spotfire.webPlayer.DataColumnRangeState} dataTable - The retrieved data table.
     */
    
    /**
     * @callback spotfire.webPlayer.Data.onGetDataTables
     * @description Callback called when a list of data tables is retrieved.
     * @param {spotfire.webPlayer.DataTable[]} dataTables - The retrieved data tables.
     */
    
    /**
     * @callback spotfire.webPlayer.Data.onRangeChanged
     * @description Callback called when the filtered range of a data data column changes.
     * @param {spotfire.webPlayer.DataColumnRangeState} marking - The object which defines the state of the filtered data range.
     */
    
    /**
     * @callback spotfire.webPlayer.Filtering.onGetFilterColumn
     * @description Callback called when a filter columns is retrieved.
     * @param {spotfire.webPlayer.FilterColumn} filterColumn - The filter column retrieved.
     */
    
    /**
     * @callback spotfire.webPlayer.Filtering.onGetFilterColumns
     * @description Callback called when a list of filter columns is retrieved.
     * @param {spotfire.webPlayer.FilterColumn[]} filterColumn - The filter columns retrieved.
     */
    
    /**
     * @callback spotfire.webPlayer.Filtering.onGetFilteringScheme
     * @description Callback called when a single [filtering scheme]{@link spotfire.webPlayer.FilteringScheme} is retrieved.
     * @param {spotfire.webPlayer.FilteringScheme} filteringScheme - The filtering scheme retrieved.
     */
    
    /**
     * @callback spotfire.webPlayer.Filtering.onGetFilteringSchemes
     * @description Callback called when a list of [filtering scheme]{@link spotfire.webPlayer.FilteringScheme}s is retrieved.
     * @param {spotfire.webPlayer.FilteringScheme[]} filteringScheme - The filtering scheme retrieved.
     */
    
    /**
     * Callback called when returning bookmarks from the [getBookmarks]{@link spotfire.webPlayer.Document#getBookmarks} function.
     * @callback spotfire.webPlayer.Document.onGetBookmarks
     * @param {spotfire.webPlayer.WebBookmark[]} bookmarks - Array of bookmark.
     */
    
    /**
     * Callback called when returning bookmark names from the [getBookmarkNames]{@link spotfire.webPlayer.Document#getBookmarkNames} function.
     * @callback spotfire.webPlayer.Document.onGetBookmarkNames
     * @param {string[]} bookmarkNames - Array of the bookmark names.
     */
    
    /**
     * Callback called when returning document metadata from the [getDocumentMetadata]{@link spotfire.webPlayer.Document#getDocumentMetadata} function.
     * @callback spotfire.webPlayer.Document.onGetDocumentMetadata
     * @param {spotfire.webPlayer.DocumentMetadata} metadata - The document metadata.
     */
    
    /**
     * Callback called when returning a page from the [getActivePage]{@link spotfire.webPlayer.Document#getActivePage} function.
     * @callback spotfire.webPlayer.Document.onGetActivePage
     * @param {spotfire.webPlayer.PageState} page - The active page.
     */
    
    /**
     * Callback called when returning from the [getPages]{@link spotfire.webPlayer.Document#getPages} function.
     * @callback spotfire.webPlayer.Document.onGetPages
     * @param {spotfire.webPlayer.PageState[]} page - The active page.
     */
    
    /**
     * Callback called when returning from the [getReports]{@link spotfire.webPlayer.Document~getReports} function.
     * @callback spotfire.webPlayer.Document.onGetReports
     * @param {string[]} page - The names of all reports in the document.
     * @since 7.12
     */
    
    /**
     * Callback called when returning a get property function.
     * @callback spotfire.webPlayer.onGetProperty
     * @param {spotfire.webPlayer.Property} property - The property.
     */
    
    /**
     * Callback called when the a list of properties is retrieved.
     * @callback spotfire.webPlayer.onGetProperties
     * @param {spotfire.webPlayer.Property[]} properties - The properties array.
     */
    
    //
    // State classes
    //
    /**
     * @class
     * @description Information about a page in the analysis.
     * @name spotfire.webPlayer.PageState
     * @param {number} index - The index of the page.
     * @param {string} pageTitle - The title of the page.
     */
    
    /**
     * @typedef spotfire.webPlayer.WebBookmark
     * @description Information of a bookmark in the analysis.
     * @property {string} id - The identifier.
     * @property {string} name - The name.
     * @property {string} author - The author.
     * @property {string} modified - The date when the bookmark was modified.
     * @property {string} visibility - If set to <c>true</c>, visibility is public.
     * @property {string} webplayerurl - The web player URL.
     * @property {string} webplayerredirecturl - The web player redirect URL.
     */
    
    /**
     * @typedef spotfire.webPlayer.DocumentMetadata
     * @description Contains the metadata of a document.
     * @property {number} contentSize - Gets the content size in bytes of this item.
     * @property {string} created - Gets a DateTime describing when this item was created in the library..
     * @property {string} description - Gets the description of this item.
     * @property {string} lastModified - Gets a DateTime describing when the last modification of this item was made in the library.
     * @property {string} path - Gets the path of this item, or null if the path was not retrieved from the library when this item was created.
     * @property {string} title - Gets the title of this item.
     */
    
    /**
     * @typedef spotfire.webPlayer.Property
     * @description Contains information about a property. This can be document properties, table properties or column properties.
     * @property {string} name - The name of the property.
     * @property {value} value - The value of the property as a formatted string or an array of formatted strings, in the users locale.
     */
    
    /**
     * @typedef spotfire.webPlayer.DataColumnRangeState
     * @description The state of the data column after a filtering has occurred.
     * @property {string} columnName - The data column name of the filtering.
     * @property {string} tableName - The data table name in which the filter column is located..
     * @property {string} filteringName - The filtering scheme name where the filter column is located.
     * @property {string} tableName - The name of the property.
     * @property {string} lowValue - The lowest value in the filtered range.
     * @property {string} highValue - The highest value in the filtered range.
     */
    
    /**
     * @typedef spotfire.webPlayer.FilterColumn
     * @description Holds information about a filter column. To get an instance of this object use the get filter column function in [FilteringScheme]{@link spotfire.webPlayer.FilteringScheme} or [Filtering]{@link spotfire.webPlayer.Filtering}.
     * @property {string} dataColumnName - The data coulmn name for this filter column.
     * @property {string} dataTableName - The name of the data table that holds this column.
     * @property {spotfire.webPlayer.FilteringScheme} filteringScheme - The filtering scheme for this column.
     * @property {spotfire.webPlayer.FilterSettings} filterSettings - The filter value and settings for this column. This is only set if the column was retrieved with the parameter <tt>includeFilterSettings</tt> set to <tt>true</tt>, otherwise this attribute is <tt>null</tt>.
     * @property {spotfire.webPlayer.filterType} filterType - The filter type of this column.
     */
    spotfire.webPlayer.InternalApplication=function(n,t,i,r,u){function a(){return}function ut(n){var t=/^(https?:\/\/)(?:[a-zA-Z0-9\-.]+@[a-zA-Z0-9\-.]+:)?(\[[a-zA-Z0-9:]+\])(:[0-9]+)?(.*)$/i.exec(n)||/^(https?:\/\/)(?:[a-zA-Z0-9\-.]+@[a-zA-Z0-9\-.]+:)?([a-zA-Z0-9\-.]+)(:[0-9]+)?(.*)$/i.exec(n);if(t){var i=t[1],u=t[2],r=t[3]||"";return i==="http://"&&r===":80"||i==="https://"&&r===":443"?i+u:i+u+r}return null}function l(){if(y&&c.length>0&&(e===null||e.isLoaded())){var n=c.shift();if(e===null)e=n,n.loadDocument();else if(e.isLoaded())while(n)n.loadDocument(e),n=c.shift()}}function ft(n){if(s&&s.contentWindow===n.source){if(h!==n.origin){f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"Disregarding message from an unknown source. Expected source is '"+h+"', was '"+n.origin+"'.");return}var t=JSON.parse(n.data);t.method==="proxyWindowLoaded"?(y=!0,l()):t.method==="documentLoaded"?o.forEach(function(n){if(n.elementId===t.elementId)n.onLoadSuccess(t.documentId,t.documentViewId,t.uri)}):t.method==="openFailed"?o.forEach(function(n){if(n.elementId===t.elementId)n.onLoadFailed(t.error)}):t.method==="logoutFailed"?f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"Logout failed."):t.method==="loggedOut"&&v()}}function nt(){if(!k){if(k=!0,window.addEventListener("message",ft),h=ut(n)||window.location.protocol+"//"+window.location.hostname+(window.location.port?":"+window.location.port:""),window.location.protocol==="https:"&&h.indexOf("https:")===-1){f(spotfire.webPlayer.errorCodes.ERROROPEN,"Mixed mode not allowed. Loading Spotfire content over http when page uses https is prevented.");return}s=document.createElement("iframe");s.id="openProxyFrame";s.style.display="none";window.setTimeout(function(){s===null&&f(spotfire.webPlayer.errorCodes.ERROROPEN,"Could not create the API proxy. Make sure that web application URL '"+n+"' is correct.")},b);var t=n+"render/bFndmi1QvzQmvOJegi/OpenProxy.aspx";s.src=t;document.body.appendChild(s);s.contentWindow.location.href=s.src}}function tt(){return o.every(function(n){return n.isIdle()})}function it(){return o.length>0}function et(n){var i=o.indexOf(n),t;if(i>=0&&o.splice(i,1),n===e)for(e=null,t=0;t<o.length;t++)if(o[t].isLoaded()){e=o[t];break}l()}function p(t,a,y){function yt(n){typeof n=="function"?st.push(n):f(spotfire.webPlayer.errorCodes.ERRORDOCUMENT,"The provided callback is invalid.")}function pt(){it?(nt=!1,w.contentWindow.postMessage(JSON.stringify({method:"closeAnalysis"}),h)):f(spotfire.webPlayer.errorCodes.ERRORCLOSE,"Document busy.")}function wt(n){var t=k.length;return k[t]=n,t}function bt(n){for(var i=[],t=0;t<n.length;t++)i[t]=typeof n[t]=="function"?wt(n[t]):n[t];return JSON.stringify(i)}function kt(){if(nt)try{window.sessionStorage.setItem("waid_"+i+"_"+t,p);window.sessionStorage.setItem("wavid_"+i+"_"+t,b)}catch(n){console.log("Could not store current state: "+n)}}function dt(){try{p=window.sessionStorage.getItem("waid_"+i+"_"+t);b=window.sessionStorage.getItem("wavid_"+i+"_"+t);window.sessionStorage.removeItem("waid_"+i+"_"+t);window.sessionStorage.removeItem("wavid_"+i+"_"+t)}catch(n){}p&&b?tt=!0:(p=null,b=null)}function lt(){if(nt&&w&&w.contentWindow)for(var t=function(n){return function(){f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"The server did not respond to request '"+n+"' in a timely fashion.")}},n=ot.pop();n;)n.requestId=window.setTimeout(t(n.functionName),ct),w.contentWindow.postMessage(JSON.stringify(n),h),n=ot.pop()}function ft(n,t,i){var r={method:"apply",nodeType:n,functionName:t,args:bt(i)};ot.push(r);lt()}function at(r){var u=b,f=!1,e;r&&(p=r.documentId(),u=r.documentViewId(),f=!0,tt=!0);e={method:"open",rootUrl:n,analysisPath:i,parameters:ht,customization:y,documentId:p,documentViewId:u,spawnView:f,domain:document.domain,elementId:t};s.contentWindow.postMessage(JSON.stringify(e),h)}function gt(n,t,i){if(p&&p!==n){f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"Invalid DocumentId.");return}for(p=n,b=t,w=document.createElement("iframe"),w.style.cssText="border:0;margin:0;padding:0;width:100%;height:100%",w.src=i;ut.hasChildNodes();)ut.removeChild(ut.lastChild);ut.appendChild(w)}function ni(n){if(tt){p=null;b=null;tt=!1;rt===e?at():(c.push(rt),l());return}it=!0;f(spotfire.webPlayer.errorCodes.ERROROPEN,n)}function ti(n,t,i){var r=function(n){var t,i;return Array.isArray(n)?(t=[],n.forEach(function(n){t.push(r(n))}),t):n.type==="DataTable"?new spotfire.webPlayer.DataTable(ft,n.dataTableName):n.type==="DataColumn"?new spotfire.webPlayer.DataColumn(ft,n.dataTableName,n.dataColumnName,n.dataType):n.type==="FilteringScheme"?(i=r(n.dataTables),i!==null?new spotfire.webPlayer.FilteringScheme(ft,n.filteringSchemeName,i):null):null},u;typeof k[n]=="function"?i?(u=r(t),u!==null?k[n](u):f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"Unkown type '"+t.type+"'.")):k[n](JSON.parse(t)):f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"The registered callback '"+n+"' seems to be an invalid JavaScript function.")}function ii(n){var t,i,r;if(w&&w.contentWindow===n.source){if(h!==n.origin){f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"Disregading message from an unknown source. Expected source is '"+h+"', was '"+n.origin+"'.");return}if(t=JSON.parse(n.data),t.method==="documentUpdated"){for(i=0,i=0;i<st.length;i++)st[i]();return}if(t.method==="analysisReady"){if(p!==t.documentId||b!==t.documentViewId){f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,"Could not create a unique document.");return}nt=!0;tt=!1;l();it=!0;d(rt.publicApi);lt();return}if(t.method==="apiResult"){ti(t.id,t.args,t.parseArgs);return}if(t.method==="apiRequestReceipt"&&window.clearTimeout(t.requestId),t.method==="analysisClosed"){nt=!1;t.closedReason==="ScheduledUpdates"?k.length>0&&(k=[],f(spotfire.webPlayer.errorCodes.ERRORCALLBACKS,"The analysis is reloading (reason: "+t.closedReason+"). There were registered callbacks that needs to be re-added.")):t.closedReason==="DifferentServer"||t.closedReason==="Restart"||t.closedReason==="Stale"?(p=null,r=!1,o.forEach(function(n){r=r||n.hasCallbacks();n.clearInternalState()}),e=null,c=o.slice(0),l(),r>0&&f(spotfire.webPlayer.errorCodes.ERRORCALLBACKS,"The analysis is reloading (reason: "+t.closedReason+"). There were registered callbacks that needs to be re-added.")):(it=!0,et(rt),g(rt));return}if(t.method==="userLoggedOut"){v();return}if(t.method==="ajaxError"){f(spotfire.webPlayer.errorCodes.ERRORINTERNAL,t.message+"\n"+t.details);return}if(t.method==="apiError"){f(t.code||spotfire.webPlayer.errorCodes.ERRORINTERNAL,t.message);return}}}function ri(){typeof a=="number"?ht+="SetPage(pageIndex="+a+");":typeof a=="string"&&(ht+='SetPage(pageTitle="'+a+'");');u&&(dt(),window.addEventListener("beforeunload",kt));window.addEventListener("message",ii)}function ui(){nt=!1;w.parentNode.removeChild(w);w=null;k=[];p=null;b=null}function fi(){return k.length>0}var ot=[],st=[],p,b,tt=!1,k=[],w,it=!1,ht=r||"",rt=this,ct=12e4,nt=!1,ut=document.getElementById(t),vt;if(ut===null){f(spotfire.webPlayer.errorCodes.ERROROPEN,"The element '"+t+"' does not exist.");return}ri();this.loadDocument=at;this.onLoadSuccess=gt;this.onLoadFailed=ni;this.onDocumentReady=yt;this.isIdle=function(){return it};this.isLoaded=function(){return nt};this.documentId=function(){return p};this.documentViewId=function(){return b};this.clearInternalState=ui;this.hasCallbacks=fi;this.elementId=t;this.closeDocument=pt;this.apply=ft;Object.defineProperty(this,"_requestTimeout",{set:function(n){ct=n}});vt=new spotfire.webPlayer.Document(this);this.publicApi=vt}function rt(n){if(n instanceof p)o.push(n),c.push(n),l();else throw"Internal error. Trying to add wrong type of document";}var w=t?JSON.parse(JSON.stringify(t)):{},e=null,o=[],b=12e4,s=null,y=!1,c=[],h=null,k=!1;Object.defineProperty(this,"analysisDocument",{get:function(){return e?e.publicApi:null}});Object.defineProperty(this,"analysisDocuments",{get:function(){return o.map(function(n){return n.publicApi})}});Object.defineProperty(this,"_openProxyTimeout",{set:function(n){b=n}});var d=a,g=a,f=a,v=a;this.openDocument=function(t,r,u){if(nt(),!n||n.length<=0)return f(spotfire.webPlayer.errorCodes.ERROROPEN,"The web application URL is null or empty."),null;if(!i||i.length<=0)return f(spotfire.webPlayer.errorCodes.ERROROPEN,"The analysis path is null or empty."),null;n.charAt(n.length-1)!=="/"&&(n+="/");var e=new p(t,r,u?JSON.parse(JSON.stringify(u)):w);return rt(e),e.publicApi};this.open=function(t,u,e){if(nt(),i=t,r=e||"",tt()&&!it()){if(!n||n.length<=0){f(spotfire.webPlayer.errorCodes.ERROROPEN,"The web application URL is null or empty.");return}n.charAt(n.length-1)!=="/"&&(n+="/");rt(new p(u,null,w))}else f(spotfire.webPlayer.errorCodes.ERROROPEN,"Application busy or user not authenticated or document already opened.")};this.close=function(){it()&&tt()?(e=null,o.forEach(function(n){n.closeDocument()})):f(spotfire.webPlayer.errorCodes.ERRORCLOSE,"Application busy or no document opened.")};this.logout=function(){if(y)s.contentWindow.postMessage(JSON.stringify({method:"logout"}),h);else{var n=this;setTimeout(function(){n.logout()},100)}};this.onOpened=function(n){d=function(t){n(t)}};this.onClosed=function(n){g=function(t){n(i,t)}};this.onError=function(n){f=n};this.onLoggedOut=function(n){v=function(){n.call(this);v=a}}}}()