import requests
import json
import sys



class Endpoints:

    def __init__(self, root):
        self._root = root

    def _headers(self, email):
        headers = {
            'accept': '*/*',
            'hippo-api-version': '1.0.0',
            'Authorization': f"Bearer testtoken:{email}",
        }
        return headers

    def _sendPost(self, endpoint, headers, params=None, files=None):
        return requests.post(self._root + endpoint, headers=headers, params=params,files=files)

    def _sendGet(self, endpoint, headers, params=None):
        return requests.get(self._root + endpoint, headers=headers, params=params)

    def _deletePost(self, endpoint, headers, params):
        return requests.delete(self._root + endpoint, headers=headers, params=params)

    #Endpoint /active/addclientapp, IGNORE THIS ENDPOINT FOR NOW

    #Endpoint /active/deactivate, Deactivate the current user account.
    def active_deactivate(self, email):
        response = self._sendPost('/active/deactivate', self._headers(email))
        return response

    #Endpoint /active/delete, Delete the current user account.
    def active_delete(self, email):
        params = (
        )

        response = self._deletePost('/active/delete', self._headers(email), params)
        return response

    #Endpoint /active/favorites, Get current user 'favorites' (categories, brands, stores).
    #Endpoint /active/favorites/set, Set current user profile 'favorites' of all types (categories, brands, stores).

    #Endpoint /active/image/delete, Delete current user profile image.
    def active_image_delete(self, email):
        params = (
        )

        response = self._deletePost('/active/image/delete', self._headers(email), params)
        return response

    #Endpoint /active/image/set, Set/update current user profile image.
    def active_image_set(self, email, _file):
        params = (
            ("file", _file),
        )

        response = self._sendPost('/active/image/set', self._headers(email), params)
        return response

    #Endpoint /active/notifications, Get a list of notification of the current user. - SKIP THIS ONE FOR NOW
    def active_notifications(self, email):
        params = (
        )

        response = self._sendGet('/active/notifications', self._headers(email), params)
        return response

    #Endpoint /active/notifications/delete, Delete (a) specified notification(s) (of the current user)
    def active_notifications_delete(self, email, eventId):
        params = (
            ("eventId", eventId),
        )

        response = self._deletePost('/active/notifications/delete', self._headers(email), params)
        return response

    #Endpoint /active/notifications/seen/set, Set (a) specified notification(s) (of the current user) as 'seen'
    def active_notifications_seen_set(self, email, eventId):
        params = (
            ("eventId", eventId),
        )

        response = self._sendPost('/active/notifications/seen/set', self._headers(email), params)
        return response
    
    #Endpoint /active/preferences, Get the current user profile general preferences
    def active_preferences(self, email):
        response = self._sendGet('/active/preferences', self._headers(email))
        return response

    #Endpoint /active/preferences/update, Set/update the current user profile general preferences
    def active_preferences_update(self, email, np=None):
        params = (
            ("np", np),
        )

        response = self._sendPost('/active/preferences/update', self._headers(email), params)
        return response

    #Endpoint /active/profile, Get current user full profile information
    def active_profile(self, email):
        response = self._sendGet('/active/profile', self._headers(email))
        return response

    #Endpoint /active/profile/update, Update current user basic info.
    def active_profile_update(self, email, firstName, lastName=None, phoneNumber=None):
        params = (
            ("firstName",firstName),
            ("lastName",lastName),
            ("phoneNumber",phoneNumber),
        )

        response = self._sendPost('/active/profile/update', self._headers(email), params)
        return response

    #Endpoint /active/socnets, Get social networks info of the current user.
    def active_socnets(self, email):
        response = self._sendGet('/active/socnets', self._headers(email))
        return response

    #Endpoint /active/socnets/set, Set/update social networks info of the current user.
    def active_socnets_set(self, email, tagline=None, facebookPage=None, twitterPage=None, instagramPage=None, tiktokPage=None, redditPage=None, youtubePage=None, websitePage=None):
        params = (
            ("tagline",tagline),
            ("facebookPage",facebookPage),
            ("twitterPage",twitterPage),
            ("instagramPage",instagramPage),
            ("tiktokPage",tiktokPage),
            ("redditPage",redditPage),
            ("youtubePage",youtubePage),
            ("websitePage",websitePage),
        )

        response = self._sendPost('/active/socnets/set', self._headers(email), params)
        return response

    #Endpoint /alt/collections/items, ALTERNATIVE: Get collection items page of the specified collection based on it's type.
    def alt_collections_items(self, email, _type, cid, page=None, size=None,):
        response = self._sendGet('/alt/collections/items', self._headers(email), params)
        return response

    #Endpoint /alt/comments/about, ALTERNATIVE: Get comments page about the specified item based on it's type.
    def alt_collections_about(self, email, _type, itemId, page=None, size=None,):
        params = (
            ("type",_type),
            ("itemId",itemId),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/alt/collections/about', self._headers(email), params)
        return response

    #Endpoint /alt/comments/by, ALTERNATIVE: Get a page of comments written by the specified user based on the item type.
    def alt_comments_by(self, email, _type, userId, page=None, size=None,):
        params = (
            ("type",_type),
            ("userId",userId),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/alt/comments/by', self._headers(email), params)
        return response

    #Endpoint /alt/followed/by, ALTERNATIVE: Get a page of followed items of the specified user based on the item type.
    def alt_followed_by(self, email, _type, userId, page=None, size=None,):
        params = (
            ("type",_type),
            ("userId",userId),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/alt/followed/by', self._headers(email), params)
        return response

    #Endpoint /alt/followers/of, ALTERNATIVE: Get followers page of the specified item based on it's type.
    def alt_followers_of(self, email, _type, itemId, page=None, size=None,):
        params = (
            ("type",_type),
            ("itemId",itemId),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/alt/followers/of', self._headers(email), params)
        return response

    #Endpoint /alt/likes/by, ALTERNATIVE: Get a page of liked items of the specified user based on the item type.
    def alt_likes_by(self, email, _type, userId, page=None, size=None,):
        params = (
            ("type",_type),
            ("userId",userId),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/alt/likes/by', self._headers(email), params)
        return response

    #Endpoint /alt/likes/of, ALTERNATIVE: Get likes page of the specified item based on it's type.
    def alt_likes_of(self, email, _type, itemId, page=None, size=None,):
        params = (
            ("type",_type),
            ("itemId",itemId),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/alt/likes/of', self._headers(email), params)
        return response
    
    
    #Endpoint /auth/redeactivate, IGNORE THIS ENDPOINT FOR NOW

    #Endpoint /auth/register, Add a new user - set basic info
    def auth_register(self, email, username, firstName, lastName=None, phoneNumber=None):
        params = (
            ("username", username),
            ("firstName", firstName),
            ("lastName", lastName),
            ("phoneNumber", phoneNumber),
        )

        response = self._sendPost('/auth/register', self._headers(email), params)
        return response

    #Endpoint /auth/status, IGNORE THIS ENDPOINT FOR NOW
    #Endpoint /auth/status, IGNORE THIS ENDPOINT FOR NOW

    #Endpoint /brands, Search for (get a page of) brands)
    def brands(self, email, name=None, namePrefix=None, q=None, page=None, size=None):
        params = (
            ("name",name),
            ("namePrefix",namePrefix),
            ("q",q),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/brands', self._headers(email), params)
        return response

    #Endpoint /brands/autocomplete, Get a list of brand names matching a specified query.
    def brands_autocomplete(self, email, q):
        params = (
            ("q",q),
        )

        response = self._sendGet('/brands/autocomplete', self._headers(email), params)
        return response

    #Endpoint /brands/comments, Get a page of comments of the specified item.
    def brands_comments(self, email, _id,page=None,size=None):

        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/brands/comments', self._headers(email), params)
        return response

    #Endpoint /brands/comments/add, Add a comment for a specified item.
    def brands_comments_add(self, email, _id, text):


        params = (
            ("id", _id),
            ("text", text),
        )

        response = self._sendPost('/brands/comments/add', self._headers(email), params)
        return response

    #Endpoint /brands/comments/remove, Remove a comment of a specified item.
    def brands_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/brands/comments/remove', self._headers(email), params)
        return response

    #Endpoint /brands/favorites, Get a list of favorite items of the current user.
    def brands_favorites(self, email):
        response = self._sendGet('/brands/favorites', self._headers(email))
        return response

    #Endpoint /brands/favorites/set, Set current user profile 'favorites'
    def brands_favorites_set(self, email, brands):
        params = (
            ("brands", brands),
        )

        response = self._sendPost('/brands/favorites/set', self._headers(email), params)
        return response

    #Endpoint /brands/follow, Follow a specified entity.
    def brands_follow(self, email, _id, np=None):
        params = (
            ("id", _id),
            ("np", np),
        )

        response = self._sendPost('/brands/follow', self._headers(email), params)
        return response

    #Endpoint /brands/follow/edit, Edit 'follow' relation preferences.
    def brands_follow_edit(self, email, followRelId, np=None):


        params = (
            ("followRelId", followRelId),
            ("np", np),
        )

        response = self._sendPost('/brands/follow/edit', self._headers(email), params)
        return response

    #Endpoint /brands/followers, Get a page of followers of the specified entity.
    def brands_followers(self, email, _id, page=None, size=None):
        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/brands/followers', self._headers(email), params)
        return response

    #Endpoint /brands/following,Get a page of items followed by the current user.
    def brands_following(self, email, page=None, size=None):
        params = (
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/brands/following', self._headers(email), params)
        return response

    #Endpoint /brands/get,Get full info of one brand.
    def brands_get(self, email, _id):
        params = (
            ("id",_id),
        )

        response = self._sendGet('/brands/get', self._headers(email), params)
        return response

    #Endpoint /brands/likes, Get a page of likes of the specified item.
    def brands_likes(self, email,_id, page=None, size=None):
        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/brands/likes', self._headers(email), params)
        return response

    #Endpoint /brands/likes/add, Like a specified item.
    def brands_likes_add(self, email, _id):
        params = (
            ("id", _id),
        )

        response = self._sendPost('/brands/likes/add', self._headers(email), params)
        return response

    #Endpoint /brands/likes/remove, Remove a like of a specified item.
    def brands_likes_remove(self, email, lid):
        
        params = (
            ('lid', lid),
        )

        response = self._deletePost('/brands/likes/remove', self._headers(email), params)
        return response

    #Endpoint /brands/unfollow, Unfollow a specified entity.
    def brands_unfollow(self, email, fid):


        params = (
            ('fid', fid),
        )

        response = self._deletePost('/brands/unfollow', self._headers(email), params)
        return response

    #Endpoint /collections
    #Search for (get a page of) collections
    # none of the param is required, so they all have default None values
    def collections(self, email, sortBy=None, _type=None, nameContains=None, descriptionContains=None, ownerId=None, containsItemId=None, q=None, sortDir=None, page=None, size=None):
        params = (
            ("sortBy",sortBy),
            ("type",_type),
            ("nameContains",nameContains),
            ("descriptionContains",descriptionContains),
            ("ownerId",ownerId),
            ("containsItemId",containsItemId),
            ("q",q),
            ("sortDir",sortDir),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/collections', self._headers(email), params)
        return response

    #Endpoint /collections/autocomplete, Get a list of collection names matching a specified query.
    def collections_autocomplete(self, email, q):

        params = (
            ('q', q),
        )

        response = self._sendGet('/collections/autocomplete', self._headers(email), params)
        return response

    #Endpoint /collections/comments, Get a page of comments of the specified item.
    def collections_comments(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/comments', self._headers(email), params)
        return response

    #Endpoint /collections/comments/add, Add a comment for a specified item.
    def collections_comments_add(self, email, _id, text):
        params = (
            ('id', _id),
            ('text', text),
        )

        response = self._sendPost('/collections/comments/add', self._headers(email), params)
        return response

    #Endpoint /collections/comments/remove, Remove a comment of a specified item.
    def collections_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/collections/comments/remove', self._headers(email), params)
        return response

    #Endpoint /collections/create, Create a new collection.
    #no default values, all params are required, but there is no checking if the specified params are not set to None
    def collections_create(self, email, _type, name, description):

        params = (
            ("type", _type),
            ("name", name),
            ("description", description),
        )

        response = self._sendPost('/collections/create', self._headers(email), params)
        return response

    #Endpoint /collections/delete, Delete an existing collection.
    def collections_delete(self, email, _id):


        params = (
            ('id', _id),
        )

        response = self._deletePost('/collections/delete', self._headers(email), params)
        return response

    #Endpoint /collections/edit, Update basic info of an existing collection.
    def collections_edit(self, email, _id, name, description):


        params = (
            ("id", _id),
            ("name", name),
            ("description", description),
        )

        response = self._sendPost('/collections/edit', self._headers(email), params)
        return response

    #Endpoint /collections/follow, Follow a specified entity.
    def collections_follow(self, email,_id, np=None):

        params = (
            ("id", _id),
            ("np", np),
        )

        response = self._sendPost('/collections/follow', self._headers(email), params)
        return response

    #Endpoint /collections/follow/edit, Edit 'follow' relation preferences.
    def collections_follow_edit(self, email, followRelId, np=None):


        params = (
            ("followRelId", followRelId),
            ("np", np),
        )

        response = self._sendPost('/collections/follow/edit', self._headers(email), params)
        return response

    #Endpoint /collections/followers, Get a page of followers of the specified entity.
    def collections_followers(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/followers', self._headers(email), params)
        return response

    #Endpoint /collections/following, Get a page of items followed by the current user.
    def collections_following(self, email, page=None, size=None):


        params = (
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/following', self._headers(email), params)
        return response

    #Endpoint /collections/get, Get full info of one collection.
    def collections_get(self, email, _id):


        params = (
            ('id', _id),
        )
        response = self._sendGet('/collections/get', self._headers(email), params)
        return response

    #Endpoint /collections/get/items, Get a page of collection items
    def collections_get_items(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/get/items', self._headers(email), params)
        return response

    #Endpoint /collections/image/delete, Delete a collection image.
    def collections_image_delete(self, email, _id):


        params = (
            ('id', _id),
        )

        response = self._deletePost('/collections/image/delete', self._headers(email), params)
        return response


    #Endpoint /collections/image/set, Set a collection image.  If the collection already has an image set, it will be replaced with the new one.IN THE FUTURE, In case of a large image file an error will be returned and no changes will be made. Note that this endpoint can not be tested from this web tool (Swagger).
    def collections_image_set(self, email, _id, _file):


        params = (
            ('id', _id),
            ('file', _file),
        )

        response = self._sendPost('/collections/image/set', self._headers(email), params)
        return response

    #Endpoint /collections/items, Deprecated. Use '/collections/get/items'

    #Endpoint /collections/likes, Get a page of likes of the specified item.
    def collections_likes(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/likes', self._headers(email), params)
        return response

    #Endpoint /collections/likes/add, Like a specified item.
    def collections_likes_add(self, email, _id):


        params = (
            ("id", _id),
        )

        response = self._sendPost('/collections/likes/add', self._headers(email), params)
        return response

    #Endpoint /collections/likes/remove, Remove a like of a specified item.
    def collections_likes_remove(self, email, lid):


        params = (
            ('lid', lid),
        )

        response = self._deletePost('/collections/likes/remove', self._headers(email), params)
        return response

    #Endpoint /collections/profile, Deprecated. Use '/collections/get'.
    #Endpoint /collections/profile/items, Deprecated. Use '/collections/get/items'

    #Endpoint /collections/unfollow, Unfollow a specified entity.
    def collections_unfollow(self, email, fid):


        params = (
            ('fid', fid),
        )

        response = self._deletePost('/collections/unfollow', self._headers(email), params)
        return response
    
    #Endpoint /collections/deals​, Get a page of collection items
    def collections_deals(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )

        response = self._sendGet('/collections/deals/', self._headers(email), params)
        return response 
    
    #Endpoint /collections/deals/add,Add a deal to a deal collection.
    def collections_deals_add(self, email, cid,iid):


        params = (
            ('cid', cid),
            ('iid', iid),
        )

        response = self._sendPost('/collections/deals/add', self._headers(email), params)
        return response 

    #Endpoint /collections/deals/comments, Get a page of comments of the specified item.
    def collections_deals_comments(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/deals/comments', self._headers(email), params)
        return response

    #Endpoint /collections/deals/comments/add,Add a comment for a specified item.
    def collections_deals_comments_add(self, email, _id,text):


        params = (
            ('id', _id),
            ('text', text),
        )

        response = self._sendPost('/collections/deals/comments/add', self._headers(email), params)
        return response

    #Endpoint /collections/deals/comments/remove, Remove a comment of a specified item.
    def collections_deals_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/collections/deals/comments/remove', self._headers(email), params)
        return response

    #Endpoint /collections/deals/get, Get a collection deal record with full information.
    def collections_deals_get(self, email, _id):


        params = (
            ('id', _id),
        )
        response = self._sendGet('/collections/deals/get', self._headers(email), params)
        return response

    #Endpoint /collections/deals/likes, Get a page of likes of the specified item.
    def collections_deals_likes(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/deals/likes', self._headers(email), params)
        return response

    #Endpoint /collections/deals/likes/add, Like a specified item.
    def collections_deals_likes_add(self, email, _id):


        params = (
            ('id', _id),
        )

        response = self._sendPost('/collections/deals/likes/add', self._headers(email), params)
        return response

    #Endpoint /collections/deals/likes/remove, Remove a like of a specified item.
    def collections_deals_likes_remove(self, email, lid):


        params = (
            ('lid', lid),
        )

        response = self._deletePost('/collections/deals/likes/remove', self._headers(email), params)
        return response

    #Endpoint /collections/deals/remove,Remove a collection item from it's collection
    def collections_deals_remove(self, email, _id):


        params = (
            ('id', _id),
        )

        response = self._deletePost('/collections/deals/remove', self._headers(email), params)
        return response
    
    #Endpoint /collections/products/, Get a page of collection items
    def collections_products(self, email, _id, page=None, size=None):
        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )

        response = self._sendGet('/collections/products/', self._headers(email), params)
        return response
    
    #Endpoint /collections/products/add, Add a product to a product collection.
    def collections_products_add(self, email, cid, iid):
        params = (
            ('cid', cid),
            ('iid', iid),
        )

        response = self._sendPost('/collections/products/add', self._headers(email), params)
        return response

    #Endpoint /collections/products/comments, Get a page of comments of the specified item.
    def collections_products_comments(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/products/comments', self._headers(email), params)
        return response

    #Endpoint /collections/products/comments/add, Add a comment for a specified item.
    def collections_products_comments_add(self, email, _id, text):


        params = (
            ('id', _id),
            ('text', text),
        )

        response = self._sendPost('/collections/products/comments/add', self._headers(email), params)
        return response

    #Endpoint /collections/products/comments/remove, Remove a comment of a specified item.
    def collections_products_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/collections/products/comments/remove', self._headers(email), params)
        return response

    #Endpoint /collections/products/get, Get a collection product record with full information.
    def collections_products_get(self, email, _id):


        params = (
            ('id', _id),
        )
        response = self._sendGet('/collections/products/get', self._headers(email), params)
        return response

    #Endpoint /collections/products/likes, Get a page of likes of the specified item.
    def collections_products_likes(self, email, _id, page=None, size=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/collections/products/likes', self._headers(email), params)
        return response

    #Endpoint /collections/products/likes/add, Like a specified item.
    def collections_products_likes_add(self, email, _id):


        params = (
            ('id', _id),
        )

        response = self._sendPost('/collections/products/likes/add', self._headers(email), params)
        return response

    #Endpoint /collections/products/likes/remove, Remove a like of a specified item.
    def collections_products_likes_remove(self, email, lid):


        params = (
            ('lid', lid),
        )

        response = self._deletePost('/collections/products/likes/remove', self._headers(email), params)
        return response

    #Endpoint /collections/products/remove
    def collections_products_remove(self, email, _id):


        params = (
            ('id', _id),
        )

        response = self._deletePost('/collections/products/remove', self._headers(email), params)
        return response

    #Endpoint /deals, Search for (get a page of) deals
    def deals(self, email, coupon=None, siteWide=None, type=None, sites=None, sitePrefix=None, taxonomy=None, q=None, page=None, size=None):
        params = (
            ('coupon', coupon),
            ('siteWide', siteWide),
            ('type', type),
            ('sites', sites),
            ('sitePrefix', sitePrefix),
            ('taxonomy', taxonomy),
            ('q', q),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/deals', self._headers(email), params)
        return response

    #Endpoint /deals/autocomplete, Get a list of deal titles matching a specified query.
    def deals_autocomplete(self, email, q):


        params = (
            ('q', q),
        )
        response = self._sendGet('/deals/autocomplete', self._headers(email), params)
        return response

    #Endpoint /deals/comments, Get a page of comments of the specified item.
    def deals_comments(self, email, _id,size=None ,page=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/deals/comments', self._headers(email), params)
        return response

    #Endpoint /deals/comments/add, Add a comment for a specified item.
    def deals_comments_add(self, email, _id,text):


        params = (
            ('id', _id),
            ('text', text),
        )

        response = self._sendPost('/deals/comments/add', self._headers(email), params)
        return response

    #Endpoint /deals/comments/remove, Remove a comment of a specified item.
    def deals_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/deals/comments/remove', self._headers(email), params)
        return response

    #Endpoint /deals/get, Get full info of one deal.
    def deals_get(self, email, _id):


        params = (
            ('id', _id),
        )
        response = self._sendGet('/deals/get', self._headers(email), params)
        return response

    #Endpoint /deals/likes Get a page of likes of the specified item.
    def deals_likes(self, email, _id, size=None, page=None):


        params = (
            ('id', _id),
            ('page', page),
            ('size', size),
        )
        response = self._sendGet('/deals/likes', self._headers(email), params)
        return response

    #Endpoint /deals/likes/add, Like a specified item.
    def deals_likes_add(self, email, _id):


        params = (
            ('id', _id),
        )
        response = self._sendPost('/deals/likes/add', self._headers(email), params)
        return response

    #Endpoint /deals/likes/remove, Remove a like of a specified item.
    def deals_likes_remove(self, email, lid):


        params = (
            ('lid', lid),
        )

        response = self._deletePost('/deals/likes/remove', self._headers(email), params)
        return response

    #Endpoint /invitations/add, Send join invitations
    def invitations_add(self, email, emails):


        params = (
            ('emails', emails),
        )
        response = self._sendPost('/invitations/add', self._headers(email), params)
        return response

    #Endpoint /products, Search for (get a page of) products
    def products(self, email, productName=None, modelNumber=None, upc=None, brandName=None, storeName=None, brandId=None, brandNameExact=None, storeId=None, storeNameExact=None, q=None, page=None, size=None):

        params = (
            ("productName",productName),
            ("modelNumber",modelNumber),
            ("upc",upc),
            ("brandName",brandName),
            ("storeName",storeName),
            ("brandId",brandId),
            ("brandNameExact",brandNameExact),
            ("storeId",storeId),
            ("storeNameExact",storeNameExact),
            ("q",q),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/products', self._headers(email), params)
        return response

    #Endpoint /products/autocomplete, Get a list of product names matching a specified query.
    def products_autocomplete(self, email, q):

        params = (
            ("q",q),
        )

        response = self._sendGet('/products/autocomplete', self._headers(email), params)
        return response

    #Endpoint /products/comments, Get a page of comments of the specified item.
    def products_comments(self, email, _id,page=None,size=None):

        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/products/comments', self._headers(email), params)
        return response

    #Endpoint /products/comments/add, Add a comment for a specified item.
    def products_comments_add(self, email, _id, text):


        params = (
            ("id", _id),
            ("text", text),
        )

        response = self._sendPost('/products/comments/add', self._headers(email), params)
        return response

    #Endpoint /products/comments/remove, Remove a comment of a specified item.

    def products_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/products/comments/remove', self._headers(email), params)
        return response

    #Endpoint /products/get, Get full info of one product.
    def products_get(self, email, _id):

        params = (
            ("id",_id),
        )

        response = self._sendGet('/products/get', self._headers(email), params)
        return response

    #Endpoint /products/get/offers
    def products_get_offers(self, email, _id,page=None,size=None):

        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/products/get/offers', self._headers(email), params)
        return response

    #Endpoint /products/likes, Get a page of likes of the specified item.
    def products_get_likes(self, email, _id,page=None,size=None):

        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/products/get/likes', self._headers(email), params)
        return response

    #Endpoint /products/likes/add, Like a specified item.
    def products_likes_add(self, email, _id):
        params = (
            ("id", _id),
        )

        response = self._sendPost('/products/likes/add', self._headers(email), params)
        return response

    #Endpoint /products/likes/remove, Remove a like of a specified item.
    def products_likes_remove(self, email, lid):
        params = (
            ('lid', lid),
        )

        response = self._deletePost('/products/likes/remove', self._headers(email), params)
        return response

    def stores(self, email, name=None, namePrefix=None, q=None, page=None, size=None):

        params = (
            ("name",name),
            ("namePrefix",namePrefix),
            ("q",q),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/stores', self._headers(email), params)
        return response

    #Endpoint /stores/autocomplete, Get a list of brand names matching a specified query.
    def stores_autocomplete(self, email, q):

        params = (
            ("q",q),
        )

        response = self._sendGet('/stores/autocomplete', self._headers(email), params)
        return response

    #Endpoint /stores/comments, Get a page of comments of the specified item.
    def stores_comments(self, email, _id,page=None,size=None):

        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/stores/comments', self._headers(email), params)
        return response

    #Endpoint /stores/comments/add, Add a comment for a specified item.
    def stores_comments_add(self, email, _id, text):


        params = (
            ("id", _id),
            ("text", text),
        )

        response = self._sendPost('/stores/comments/add', self._headers(email), params)
        return response

    #Endpoint /stores/comments/remove, Remove a comment of a specified item.
    def stores_comments_remove(self, email, cid):


        params = (
            ('cid', cid),
        )

        response = self._deletePost('/stores/comments/remove', self._headers(email), params)
        return response

    #Endpoint /stores/favorites, Get a list of favorite items of the current user.
    def stores_favorites(self, email):
        response = self._sendGet('/stores/favorites', self._headers(email))
        return response

    #Endpoint /stores/favorites/set, Set current user profile 'favorites'
    def stores_favorites_set(self, email, stores):


        params = (
            ("stores", stores),
        )

        response = self._sendPost('/stores/favorites/set', self._headers(email), params)
        return response

    #Endpoint /stores/follow, Follow a specified entity.
    def stores_follow(self, email, _id, np=None):


        params = (
            ("id", _id),
            ("np", np),
        )

        response = self._sendPost('/stores/follow', self._headers(email), params)
        return response

    #Endpoint /stores/follow/edit, Edit 'follow' relation preferences.
    def stores_follow_edit(self, email, followRelId, np=None):


        params = (
            ("followRelId", followRelId),
            ("np", np),
        )

        response = self._sendPost('/stores/follow/edit', self._headers(email), params)
        return response

    #Endpoint /stores/followers, Get a page of followers of the specified entity.
    def stores_followers(self, email, _id, page=None, size=None):
        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/stores/followers', self._headers(email), params)
        return response

    #Endpoint /stores/following,Get a page of items followed by the current user.
    def stores_following(self, email, page=None, size=None):
        params = (
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/stores/following', self._headers(email), params)
        return response

    #Endpoint /stores/get,Get full info of one brand.
    def stores_get(self, email, _id):
        params = (
            ("id",_id),
        )

        response = self._sendGet('/stores/get', self._headers(email), params)
        return response

    #Endpoint /stores/likes, Get a page of likes of the specified item.
    def stores_likes(self, email,_id, page=None, size=None):
        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/stores/likes', self._headers(email), params)
        return response

    #Endpoint /stores/likes/add, Like a specified item.
    def stores_likes_add(self, email, _id):


        params = (
            ("id", _id),
        )

        response = self._sendPost('/stores/likes/add', self._headers(email), params)
        return response

    #Endpoint /stores/likes/remove, Remove a like of a specified item.
    def stores_likes_remove(self, email, lid):


        params = (
            ('lid', lid),
        )

        response = self._deletePost('/stores/likes/remove', self._headers(email), params)
        return response

    #Endpoint /stores/unfollow, Unfollow a specified entity.
    def stores_unfollow(self, email, fid):


        params = (
            ('fid', fid),
        )

        response = self._deletePost('/stores/unfollow', self._headers(email), params)
        return response


    #Endpoint /categories, Get a page of taxonomy tuples.
    def categories(self, email, name=None, namePrefix=None, level=None, parent=None, q=None, page=None, size=None):
        params = (
            ("name",name),
            ("namePrefix",namePrefix),
            ("level",level),
            ("parent",parent),
            ("q",q),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/categories', self._headers(email), params)
        return response

    #Endpoint /categories/autocomplete, Get a list of taxonomy tuples matching a specified query.
    def categories_autocomplete(self, email, q, level=None):
        params = (
            ("q",q),
            ("level",level),
        )

        response = self._sendGet('/categories/autocomplete', self._headers(email), params)
        return response

    #Endpoint /categories/favorites, Get a list of favorite items of the current user.
    def categories_favorites(self, email):
        response = self._sendGet('/categories/favorites', self._headers(email))
        return response

    #Endpoint /categories/favorites/set, Set current user profile 'favorites'
    def categories_favorites_set(self, email, categories=None):
        params = (
            ("categories", categories),
        )

        response = self._sendPost('/categories/favorites/set', self._headers(email), params)
        return response

    #Endpoint /user/account/deactivate, Deactivate the current user account.
    def user_account_deactivate(self, email):


        response = self._sendPost('/user/account/deactivate', self._headers(email))
        return response

    #Endpoint /user/account/delete, Delete the current user account.
    def user_account_delete(self, email):


        response = self._deletePost('/user/account/delete', self._headers(email))
        return response
    #Endpoint /user/addclientapp, IGNORE THIS ENDPOINT FOR NOW

    #Endpoint /user/favorites, Get current user 'favorites' (categories, brands, stores).

    #Endpoint /user/favorites/set, Set current user profile 'favorites' of all types (categories, brands, stores).

    #Endpoint /user/followers, Get a page of the current user followers.

    #Endpoint /user/image/delete, Delete current user profile image.
    def user_image_delete(self, email):


        response = self._deletePost('/user/image/delete', self._headers(email))
        return response

    #Endpoint /user/image/set, Set/update current user profile image.
    def user_image_set(self, email,path):


        files = {
            'file': (path, open(path, 'rb')),
        }

        response = self._sendPost('/user/image/set', self._headers(email), files)
        return response

    #Endpoint /user/notifications, Get a list of notification of the current user. - SKIP THIS ONE FOR NOW
    def user_notifications(self, email):

        response = self._sendGet('/user/notifications', self._headers(email))
        return response

    #Endpoint /user/notifications/delete, Delete (a) specified notification(s) (of the current user)
    def user_notifications_delete(self, email, eventId):


        params = (
            ("eventId", eventId),
        )

        response = self._deletePost('/user/notifications/delete', self._headers(email), params)
        return response

    #Endpoint /user/notifications/seen/set, Set (a) specified notification(s) (of the current user) as 'seen'
    def user_notifications_seen_set(self, email, eventId):


        params = (
            ("eventId", eventId),
        )

        response = self._sendPost('/user/notifications/seen/set', self._headers(email), params)
        return response

    #Endpoint /user/preferences, Get the current user profile general preferences
    def user_preferences(self, email):

        response = self._sendGet('/user/preferences', self._headers(email))
        return response

    #Endpoint /user/preferences/update, Set/update the current user profile general preferences
    def user_preferences_update(self, email, np=None):


        params = (
            ("np", np),
        )

        response = self._sendPost('/user/preferences/update', self._headers(email), params)
        return response

    #Endpoint /user/profile, Get current user full profile information
    def user_profile(self, email):
        response = self._sendGet('/user/profile', self._headers(email))
        return response

    #Endpoint /user/profile/update, Update current user basic info.
    def user_profile_update(self, email, username, firstName, lastName=None, phoneNumber=None):

        params = (
            ("username",username),
            ("firstName",firstName),
            ("lastName",lastName),
            ("phoneNumber",phoneNumber),
        )

        response = self._sendPost('/user/profile/update', self._headers(email), params)
        return response

    #Endpoint /user/socnets, Get social networks info of the current user.
    def user_socnets(self, email):

        response = self._sendGet('/user/socnets', self._headers(email))
        return response

    #Endpoint /user/socnets/set, Set/update social networks info of the current user.
    def user_socnets_set(self, email, tagline=None, facebookPage=None, twitterPage=None, instagramPage=None, tiktokPage=None, redditPage=None, youtubePage=None, websitePage=None):

        params = (
            ("tagline",tagline),
            ("facebookPage",facebookPage),
            ("twitterPage",twitterPage),
            ("instagramPage",instagramPage),
            ("tiktokPage",tiktokPage),
            ("redditPage",redditPage),
            ("youtubePage",youtubePage),
            ("websitePage",websitePage),
        )

        response = self._sendPost('/user/socnets/set', self._headers(email), params)
        return response

    #Endpoint /users, Search for (get a page of) users
    def users(self, email, usernamePrefix=None, firstNamePrefix=None, lastNamePrefix=None, q=None, page=None, size=None):

        params = (
            ("usernamePrefix",usernamePrefix),
            ("firstNamePrefix",firstNamePrefix),
            ("lastNamePrefix",lastNamePrefix),
            ("q",q),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/users', self._headers(email), params)
        return response

    #Endpoint /users/autocomplete, Get a list of user names matching a specified query.
    def users_autocomplete(self, email, q):

        params = (
            ("q",q),
        )

        response = self._sendGet('/users/autocomplete', self._headers(email), params)
        return response

    #Endpoint /users/emailstatuses, Get user status(es) by e-mail(s)
    def users_emailstatuses(self, email, emails):

        params = (
            ("emails",emails),
        )

        response = self._sendGet('/users/emailstatuses', self._headers(email), params)
        return response

    #Endpoint /users/follow, Follow a specified entity.
    def users_follow(self, email, _id, np=None):
        params = (
            ("id",_id),
            ("np",np),
        )

        response = self._sendPost('/users/follow', self._headers(email), params)
        return response

    #Endpoint /users/follow/edit, Edit 'follow' relation preferences.
    def users_follow_edit(self, email, followRelId, np=None):

        params = (
            ("followRelId",followRelId),
            ("np",np),
        )

        response = self._sendPost('/users/follow/edit', self._headers(email), params)
        return response

    #Endpoint /users/followers, Get a page of followers of the specified entity.
    def users_followers(self, email, _id, page=None, size=None):

        params = (
            ("id",_id),
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/users/followers', self._headers(email), params)
        return response

    #Endpoint /users/following, Get a page of items followed by the current user.
    def users_following(self, email, page=None, size=None):

        params = (
            ("page",page),
            ("size",size),
        )

        response = self._sendGet('/users/following', self._headers(email), params)
        return response

    #Endpoint /users/get, Get full info of one user.
    def users_get(self, email, _id):

        params = (
            ("id",_id),
        )

        response = self._sendGet('/users/get', self._headers(email), params)
        return response

    #Endpoint /users/unfollow, Unfollow a specified entity.
    def users_unfollow(self, email, fid): 

        params = (
            ("fid",fid),
        )

        response = self._deletePost('/users/unfollow', self._headers(email), params)
        return response

