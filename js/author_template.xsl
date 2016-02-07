
<script>
    <xsl:template name="author_template">
    <xsl:for-each select="//id">
            <xsl:sort order="ascending" data-type="number" select="timePosted"/>
    <div class="mdl-card mdl-cell mdl-cell--4" >
    <div class="mdl-card__media mdl-color-text--grey-50" style="background-image: url(' xsl:value-of select="image" + ');">
        </div>
        <h3><a href=" 'xsl:value-of select="link"' "> 'xsl:value-of select="art" ' </a></h3>
        <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
        <div class="minilogo"><a href="http://www.freecodecamp.com/' + xsl:value-of select="author.username" + '"><img class="avatar" src="' + xsl:value-of select="author.picture" + ')"></a></div>
        <div>
        <a class="author-link" href="http://www.freecodecamp.com/' + xsl:value-of select="author.username" + '"><strong>@' + xsl:value-of select="author.username" + '</strong></a>';
        <span>' + jQuery.timeago(xsl:value-of select="timePosted") + '</span>';
        <span>' + xsl:value-of select="rank" + (xsl:value-of select="rank" > 1 ? " votes" : " vote") + '</span></div>';
        <button id="' + xsl:value-of select="id" + '" class="mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--fab mdl-color--primary mdl-upvote-btn"><i class="material-icons mdl-color-text--white btn" role="presentation">arrow_upward</i><span class="visuallyhidden">arrow_upward</span></button>';
        </div>
        </div>
        </div>
        </div>

        </xsl:for-each>
    </xsl:template>
</script>
