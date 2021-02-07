package com.nagarjun.zuulgateway

import org.slf4j.Logger
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component

import com.netflix.zuul.ZuulFilter
import com.netflix.zuul.context.RequestContext;
import com.netflix.zuul.exception.ZuulException
import javax.servlet.http.HttpServletRequest

@Component
class ErrorFilter extends ZuulFilter{

	private Logger logger=LoggerFactory.getLogger(this.getClass());

	@Override
	public boolean shouldFilter() {
		return true;
	}

	@Override
	public Object run() throws ZuulException {
		RequestContext context = RequestContext.getCurrentContext();

		logger.info("Error Filter: " + String.format("Error response Status Code: %s", context.getResponse().getStatus()));

		return null;
	}

	@Override
	public String filterType() {
		return "error";
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		return 1;
	}
}
